<script lang="ts">
    import * as config from '$lib/config';
    import dayjs from 'dayjs';

    export let data;
</script>

<!-- <pre>
    {JSON.stringify(data)}
</pre> -->

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>{dayjs(data.meta.date).format('MMMM DD, YYYY')}</p>
    </hgroup>
    <div class="tags">
        {#each data.meta.categories as category }
            <!-- Can add link to categories for new page list of related posts -->
            <a class="tag-link" href={`/?tagName=${category}`}>
                <span class="tag surface-4">&num;{category} </span>
            </a>
        {/each}
    </div>
    <div class="prose">
        <svelte:component this={data.content}></svelte:component>
    </div>
</article>

<style>
    article {
        /* max-inline-size: var(--size-3); */
        margin-inline: auto;
    }
    h1 {
        color: var(--text);
    }
    .prose {
        color: var(--text);
    }
    .tags {
        display: flex;
        gap: var(--size-3);
        margin-top: var(--size-7);
        margin-bottom: var(--size-3);
    }
    .tag {
        padding: var(--size--2) var(--size-3);
        border-radius: var(--size--1);
        background-color: var(--black-1);
    }
</style>
