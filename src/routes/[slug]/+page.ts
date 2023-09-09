import { error } from '@sveltejs/kit';

// export const ssr = true;

export async function load({ params }) {
    try {
        const post = await import(`../../posts/${params.slug}.md`);
        return {
            content: post.default, // default: body of markdown file
            meta: post.metadata, // info of markdown file
        }
    } catch (e) {
        return error(404, `Cannot find post ${params.slug}`);
    }
}