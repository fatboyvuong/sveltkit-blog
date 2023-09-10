import type { Posts } from '$lib/type';
import { json } from '@sveltejs/kit';

async function getPosts(limit?: number) {
	let posts: Posts[] = [];

	const paths = import.meta.glob('/src/posts/*.md', {
		eager: true
	});

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Posts, 'slug'>; // tyepscript helper
			const post = { ...metadata, slug };
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(first.date).getTime() - new Date(second.date).getTime()
	);

	return posts;
}

async function getPostsByTag(tagName: string) {
	const posts = await getPosts();
	return posts.filter(post => post.categories.includes(tagName));
}

export async function GET({ url }) {
	let posts: any;
	if (url.searchParams.has('tagName')) {
		const tagName = url.searchParams.get('tagName');
		posts = await getPostsByTag(tagName || '');
	} else {
		posts = await getPosts();
	}
	return json(posts);
}
