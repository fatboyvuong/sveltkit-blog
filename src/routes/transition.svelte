<script lang="ts">
    import { fade } from "svelte/transition";

    export let url = '';
</script>

<!-- Transition Component wrap outside page to make fade in effect when navigating -->
{#key url}
    <div class="transition" in:fade>
        <slot />
    </div>
{/key}

<style>
    .transition {
        height: 100%;
    }
</style>