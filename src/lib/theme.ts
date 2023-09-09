import { browser } from "$app/environment";
import { writable } from "svelte/store";

type Theme = 'light' | 'dark';

const userTheme = browser && localStorage.getItem('color-scheme');

// like redux store
export const theme = writable(userTheme ?? 'dark');

export function toggleTheme() {
    theme.update(currentThem => {
        const newTheme = currentThem === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('color-scheme', newTheme);
        localStorage.setItem('color-scheme', newTheme);
        return newTheme;
    })
}

export function setTheme(newTheme: Theme) {
    theme.set(newTheme);
}