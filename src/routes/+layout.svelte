<script>
	import '../app.css';
	import SettingsButton from '$lib/components/Settings/SettingsTrigger.svelte';
	import SettingsPanel from '$lib/components/Settings/SettingsPanel.svelte';
	import ShortcutEditPopup from '$lib/components/Shortcut/ShortcutEditPopup.svelte';
	import ShortcutContextMenu from '$lib/components/Shortcut/ShortcutContextMenu.svelte';
</script>

<div class="container flex h-screen w-screen">
	<SettingsButton />
	<slot />
</div>

<SettingsPanel />
<ShortcutEditPopup />
<ShortcutContextMenu />
