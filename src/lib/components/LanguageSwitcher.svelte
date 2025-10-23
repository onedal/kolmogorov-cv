<script>
	import { goto } from '$app/navigation';
	
	export let currentLanguage;
	export let currentSpecialization;
	
	const languages = [
		{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
		{ code: 'en', name: 'English', flag: '🇺🇸' }
	];
	
	function switchLanguage(lang) {
		goto(`/${currentSpecialization}/${lang}`);
	}
</script>

<div class="flex gap-2">
	{#each languages as lang}
		<button
			on:click={() => switchLanguage(lang.code)}
			class="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 {currentLanguage === lang.code 
				? 'bg-primary-100 text-primary-700 border border-primary-300' 
				: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}"
		>
			<span class="text-lg">{lang.flag}</span>
			<span class="text-sm font-medium">{lang.name}</span>
		</button>
	{/each}
</div>
