<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import Badge from '$lib/components/ui/badge.svelte';
	import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle } from 'lucide-svelte';
	
	$: currentPath = $page.url.pathname;
	$: isDevOps = currentPath.includes('/devops');
	$: isEnglish = currentPath.includes('/en');
	
	// Данные для заголовка
	const personalInfo = {
		ru: {
			firstName: 'Алексей',
			lastName: 'Колмогоров',
			title: isDevOps ? 'DevOps Engineer' : 'Senior Backend Engineer',
			location: 'Москва, Россия',
			email: 'sunrise3323@gmail.com',
			phone: '+7 999 059-70-82',
			linkedin: 'linkedin.com/in/kolmogorov',
			github: 'github.com/kolmogorov'
		},
		en: {
			firstName: 'Alexey',
			lastName: 'Kolmogorov',
			title: isDevOps ? 'DevOps Engineer' : 'Senior Backend Engineer',
			location: 'Moscow, Russia',
			email: 'sunrise3323@gmail.com',
			phone: '+7 999 059-70-82',
			linkedin: 'linkedin.com/in/kolmogorov',
			github: 'github.com/kolmogorov'
		}
	};
	
	$: info = personalInfo[isEnglish ? 'en' : 'ru'];
</script>

<Card>
	<CardHeader>
		<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
			<div class="flex items-center gap-3 sm:gap-4">
				<div class="min-w-0 flex-1">
					<div class="text-xl sm:text-2xl font-bold text-foreground leading-tight">
						<div>{info.firstName}</div>
						<div>{info.lastName}</div>
					</div>
					<Badge variant="secondary" class="mt-1 sm:mt-2 text-xs sm:text-sm">{info.title}</Badge>
				</div>
			</div>
		</div>
	</CardHeader>
</Card>
