import { persisted } from 'svelte-local-storage-store';

export const shortcuts = persisted('shortcuts', []);
