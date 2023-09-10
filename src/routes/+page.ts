import type { Posts } from '$lib/type';

export async function load({ fetch, url }) {
    if (url.searchParams.has('tagName')) {
        const response = await fetch(`api/posts/?tagName=${url.searchParams.get('tagName')}`);
        const posts: Posts[] = await response.json();
        return { posts };
    } else {
        const response = await fetch('api/posts');
        const posts: Posts[] = await response.json();
        return { posts };
    }
}