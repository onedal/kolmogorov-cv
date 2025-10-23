<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	
	$: specialization = $page.params.specialization || 'develop';
	
	function selectLanguage(lang) {
		goto(`/${specialization}/${lang}`);
	}
</script>

<svelte:head>
	<title>Backend Developer - Алексей Колмогоров</title>
	<meta name="description" content="Backend Developer резюме Алексея Колмогорова" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
	<div class="max-w-2xl w-full">
		<div class="card text-center">
			<div class="mb-8">
				<div class="text-6xl mb-4">⚙️</div>
				<h1 class="text-4xl font-bold text-gray-800 mb-2">Backend Developer</h1>
				<p class="text-xl text-gray-600">Выберите язык</p>
			</div>
			
			<div class="grid md:grid-cols-2 gap-6">
				<button 
					on:click={() => selectLanguage('ru')}
					class="group p-8 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all duration-300"
				>
					<div class="text-4xl mb-4">🇷🇺</div>
					<h2 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600">Русский</h2>
					<p class="text-gray-600">Резюме на русском языке</p>
				</button>
				
				<button 
					on:click={() => selectLanguage('en')}
					class="group p-8 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all duration-300"
				>
					<div class="text-4xl mb-4">🇺🇸</div>
					<h2 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600">English</h2>
					<p class="text-gray-600">Resume in English</p>
				</button>
			</div>
			
			<div class="mt-8">
				<button 
					on:click={() => goto('/')}
					class="btn-secondary"
				>
					← Назад к выбору специализации
				</button>
			</div>
		</div>
	</div>
</main>
