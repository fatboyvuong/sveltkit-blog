// pre-render all urls, markdown files when build time
export const prerender = true;

// Disable SSR render for lucide-svelte icon issue
// export const ssr = false;

export async function load({ url }) {
    return {
        url: url.pathname,
    };
}