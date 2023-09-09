<script lang="ts">
    import * as config from '$lib/config'
    import Toggle from './toggle.svelte';
</script>

<div class="header-wrapper">
    <nav>
        <a href="/" class="title">
           <h4>{config.title}</h4>
        </a>
    </nav>
    
    <ul class="links">
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
        <!-- <li>
            <a href="/rss.xml" target="_blank">RSS</a>
        </li> -->
    </ul>
    <!-- <button>Toggle</button> -->
    <Toggle />
</div>

<style>
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        float: left;
        padding-block: var(--size-7);
    }

    .links {
        margin-block: var(--size-7);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
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