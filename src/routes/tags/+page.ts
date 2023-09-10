import { error } from '@sveltejs/kit';
import type { Posts } from '$lib/type';

export async function load({ url }) {
    try {
        const response = await fetch(`api/posts/?tagName=${url?.searchParams.get('tagName')}`);
        const posts: Posts[] = await response.json();
        return { posts };
    } catch (e) {
        return error(404, `No post`)
    }
}