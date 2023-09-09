<script lang="ts">
    import * as config from '$lib/config'
</script>

<footer>
    <p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
    footer {
        width: 100%;
        padding-block: var(--size-7);
        border-top: 1px solid var(--border);
    }

    p {
        text-align: center;
        color: var(--text);
        /* color: var(--text-2); */
    }
</style>

