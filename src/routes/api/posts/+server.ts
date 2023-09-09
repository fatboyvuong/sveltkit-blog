import type { Posts } from '$lib/type';
import { json } from '@sveltejs/kit';

async function getPosts(limit?: number) {
	let posts: Posts[] = [];

	const paths = import.meta.glob('/src/posts/*.md', {
		eager: true
	});

	console.log(paths)

	for (const path in paths) {
		const file = paths[path];
		console.log(file);
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

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
