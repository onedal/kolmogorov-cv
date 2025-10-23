<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import { GraduationCap } from 'lucide-svelte';
	
	$: currentPath = $page.url.pathname;
	$: isEnglish = currentPath.includes('/en');
	
	const education = {
		ru: {
			title: 'Образование',
			thesisLabel: 'Тема диплома:',
			items: [
				{
					degree: 'Магистр',
					specialty: 'Информационные системы и технологии',
					thesis: 'Разработка CI/CD сервиса на инфраструктуре AWS',
					university: 'Дальневосточный федеральный университет',
					year: '2017'
				},
				{
					degree: 'Бакалавр',
					specialty: 'Информационные системы и технологии',
					thesis: 'Разработка платформы для онлайн обучения на Ruby on Rails',
					university: 'Дальневосточный федеральный университет',
					year: '2015'
				}
			]
		},
		en: {
			title: 'Education',
			thesisLabel: 'Thesis:',
			items: [
				{
					degree: 'Master\'s Degree',
					specialty: 'Information Systems and Technologies',
					thesis: 'Development of CI/CD service on AWS infrastructure',
					university: 'Far Eastern Federal University',
					year: '2017'
				},
				{
					degree: 'Bachelor\'s Degree',
					specialty: 'Information Systems and Technologies',
					thesis: 'Development of online learning platform on Ruby on Rails',
					university: 'Far Eastern Federal University',
					year: '2015'
				}
			]
		}
	};
	
	$: info = education[isEnglish ? 'en' : 'ru'];
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-2">
			<GraduationCap class="w-5 h-5 text-primary" />
			<CardTitle>{info.title}</CardTitle>
		</div>
	</CardHeader>
	<CardContent class="space-y-4">
		{#each info.items as item}
			<div class="border-l-4 border-primary pl-4">
				<h4 class="font-semibold text-foreground">{item.degree}</h4>
				<p class="text-sm text-muted-foreground">{item.specialty}</p>
				<p class="text-sm font-medium text-primary">{item.university}</p>
				<p class="text-sm text-muted-foreground">
					<span class="font-medium">{info.thesisLabel}</span> {item.thesis}
				</p>
				<p class="text-xs text-muted-foreground">{item.year}</p>
			</div>
		{/each}
	</CardContent>
</Card>
