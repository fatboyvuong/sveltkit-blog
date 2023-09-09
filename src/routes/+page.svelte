<script lang="ts">
    import * as config from '$lib/config';

    export let data;
</script>

<!-- <pre>
    {JSON.stringify(data, null, 0)}
</pre> -->

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <ul class="posts">
        {#each data.posts as post }
            <li class="post">
                <a href={post.slug} class="title">{post.title}</a>
                <p class="date">{post.date}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>
    .posts {
        display: grid;
        gap: var(--size-7);
    }

    .post {
        max-inline-size: var(--size-content-3);
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--gray-4);
        padding-bottom: var(--size-7);
    }

    ul {
        list-style-type: none;
    }

    .title {
        font-size: var(--font-size-fluid-3);
        text-transform: capitalize;
        color: var(--black-3);
        text-decoration: none;
    }

</style>