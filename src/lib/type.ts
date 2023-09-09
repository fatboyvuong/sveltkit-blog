export type Categories = 'sveltekit' | 'svelte' | 'blog' | 'personal';

export type Posts = {
    title: string,
    slug: string,
    date: string,
    description: string,
    categories: Categories[],
    published: boolean,
};