import { writable } from 'svelte/store';

export const isSettingsMenuOpen = writable(false);

export const shortcutEditPopup = writable(null as App.ShortcutEditPopup);
export const shortcutContextMenu = writable(null as App.ShortcutContextMenu);
