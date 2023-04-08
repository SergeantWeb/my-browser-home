<script>
	import '../app.css';
	import SettingsButton from '$lib/components/Settings/SettingsTrigger.svelte';
	import SettingsPanel from '$lib/components/Settings/SettingsPanel.svelte';
</script>

<div class="container flex h-screen w-screen">
	<SettingsButton />
	<slot />
</div>

<SettingsPanel />
