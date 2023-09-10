<script lang="ts">
    import * as config from '$lib/config'
    import Toggle from './toggle.svelte';
</script>

<div class="header-wrapper">
    <nav>
        <a href="/" class="title">
           <h3 class="h3">{config.title}</h3>
        </a>
    </nav>

    <!-- classs='list-nav' work for vertical -->
    <nav> 
        <ul class="links">
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>

    <Toggle />
</div>

<style>
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text);
    }

    nav {
        float: left;
        padding-block: var(--size-7);
    }

    .links {
        margin-block: var(--size-7);
    }

    a {
        color: var(--text);
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    h4 {
        color: --var(--text);
    }

    .title {
        color: --var(--text) !important;
    }

    @media (min-width: 768px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
    }
</style>