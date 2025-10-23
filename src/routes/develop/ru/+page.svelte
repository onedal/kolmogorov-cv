<script>
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Education from '$lib/components/Education.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import SpecializationSwitcher from '$lib/components/SpecializationSwitcher.svelte';
</script>

<svelte:head>
	<title>Алексей Колмогоров - Backend Developer | Ruby on Rails, Микросервисы</title>
	<meta name="description" content="Опытный Backend Developer с 10+ летним опытом в Ruby on Rails, микросервисах и AWS. Полное резюме с опытом работы, навыками и проектами." />
	<meta name="keywords" content="backend developer, ruby on rails, микросервисы, aws, kubernetes, docker, алексей колмогоров, резюме, разработчик" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
	<!-- Навигация -->
	<div class="bg-white shadow-sm border-b">
		<div class="max-w-6xl mx-auto px-4 py-3 sm:py-4">
			<div class="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
				<div class="flex items-center gap-3 sm:gap-4">
					<div class="min-w-0 flex-1">
						<SpecializationSwitcher currentSpecialization="develop" />
					</div>
				</div>
				<div class="flex justify-end">
					<LanguageSwitcher currentLanguage="ru" currentSpecialization="develop" />
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-6xl mx-auto px-4 py-8">
		<div class="grid lg:grid-cols-3 gap-8">
			<!-- Левая колонка -->
			<div class="lg:col-span-1 space-y-6">
				<div class="space-y-6">
					<Header />
					<Contact />
				</div>
				<Skills />
			</div>
			
			<!-- Правая колонка -->
			<div class="lg:col-span-2 space-y-6">
				<About />
				<Experience />
				<Education />
				<Projects />
			</div>
		</div>
	</div>
	
	<Footer />
</main>
