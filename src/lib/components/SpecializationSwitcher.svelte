<script>
	import { goto } from '$app/navigation';
	
	export let currentSpecialization;
	
	const specializations = [
		{ code: 'develop', name: 'Backend Developer', icon: '⚙️' },
		{ code: 'devops', name: 'DevOps Engineer', icon: '🚀' }
	];
	
	function switchSpecialization(spec) {
		goto(`/${spec}/ru`);
	}
</script>

<div class="flex gap-2">
	{#each specializations as spec}
		<button
			on:click={() => switchSpecialization(spec.code)}
			class="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 {currentSpecialization === spec.code 
				? 'bg-primary-100 text-primary-700 border border-primary-300' 
				: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}"
		>
			<span class="text-lg">{spec.icon}</span>
			<span class="text-sm font-medium">{spec.name}</span>
		</button>
	{/each}
</div>
