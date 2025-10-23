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
	<title>Alexey Kolmogorov - Backend Developer | Ruby on Rails, Microservices</title>
	<meta name="description" content="Experienced Backend Developer with 10+ years of experience in Ruby on Rails, microservices and AWS. Complete resume with work experience, skills and projects." />
	<meta name="keywords" content="backend developer, ruby on rails, microservices, aws, kubernetes, docker, alexey kolmogorov, resume, developer" />
</svelte:head>

<main class="min-h-screen bg-gray-50">
	<!-- Навигация -->
	<div class="bg-white shadow-sm border-b">
		<div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
			<SpecializationSwitcher currentSpecialization="develop" />
			<LanguageSwitcher currentLanguage="en" currentSpecialization="develop" />
		</div>
	</div>

	<div class="max-w-6xl mx-auto px-4 py-8">
		<div class="grid lg:grid-cols-3 gap-8">
			<!-- Левая колонка -->
			<div class="lg:col-span-1 space-y-6">
				<Header />
				<Contact />
				<Skills />
			</div>
			
			<!-- Правая колонка -->
			<div class="lg:col-span-2 space-y-6">
				<About />
				<Experience />
				<Projects />
				<Education />
			</div>
		</div>
	</div>
	
	<Footer />
</main>
