// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	type Shortcut = {
		title: string;
		link: string;
	};
}

/* Unplugin-icons */
declare module 'virtual:icons/*' {
	export { SvelteComponentDev as default } from 'svelte/internal';
}

/* HTML Props */
declare namespace svelte.JSX {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	interface HTMLProps<T> {
		onclick_outside?: () => void;
	}
}
