<script lang="ts">
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import PageTransition from './transition.svelte';

    import 'open-props/style'
    import 'open-props/normalize'
    import 'open-props/buttons'
    import '../app.css'

    export let data;
</script>

<!-- <pre>
    {JSON.stringify(data)}
</pre> -->

<div class="layout">
    <Header />
    <main>
        <PageTransition url={data?.url}>
            <slot />
        </PageTransition>
    </main>
    <Footer />
</div>

<style>
    .layout {
        /* height: 100%; */
        height: 100vh;
        /* width: 100vh; */
        /* max-inline-size: 1440px; */
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
        background-color: var(--background);
        color: var(--text);
    }

    main {
        padding-block: var(--size-9);
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: var(--size-4);
        }
    }
</style>