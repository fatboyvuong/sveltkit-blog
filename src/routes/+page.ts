import type { Posts } from '$lib/type';

export async function load({ fetch }) {
    const response = await fetch('api/posts');
    const posts: Posts[] = await response.json();
    return { posts };
}