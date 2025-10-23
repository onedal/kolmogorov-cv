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
	<title>Алексей Колмогоров - DevOps Engineer | AWS, Kubernetes, CI/CD</title>
	<meta name="description" content="Опытный DevOps Engineer с 10+ летним опытом в AWS, Kubernetes, CI/CD и автоматизации инфраструктуры. Полное резюме с опытом работы и навыками." />
	<meta name="keywords" content="devops engineer, aws, kubernetes, ci/cd, docker, terraform, алексей колмогоров, резюме, devops" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
	<!-- Навигация -->
	<div class="bg-white shadow-sm border-b">
		<div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
			<SpecializationSwitcher currentSpecialization="devops" />
			<LanguageSwitcher currentLanguage="ru" currentSpecialization="devops" />
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
