<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import Badge from '$lib/components/ui/badge.svelte';
	import { ExternalLink, Github } from 'lucide-svelte';
	
	$: currentPath = $page.url.pathname;
	$: isEnglish = currentPath.includes('/en');
	
	const projects = {
		ru: {
			title: 'Личные проекты',
			items: [
				{
					name: 'CrawlerX',
					description: 'Распределённая сеть парсеров на Playwright с отправкой событий в backend API для автоматизированного сбора контента.\nУправление сетью из 20+ сайтов для доставки контента пользователям, монетизация через рекламу.',
					technologies: ['AWS SQS', 'Playwright', 'Svelte', 'PostgreSQL', 'Rails API', 'Sidekiq'],
					url: 'https://api.crawlerx.ru/admin/login',
					github: 'https://github.com/crawlerx',
					period: 'с 2024 по настоящее'
				},
				{
					name: 'Begifly',
					description: 'Платформа для управления тренировками, ориентированная на тренеров по бегу и атлетов.\nПоддерживает интеграцию со Strava, AI-тренера и AI-анализ тренировок.\nДоступна через веб-приложение (Svelte) и Telegram Mini App',
					technologies: ['Rails API', 'Svelte', 'Telegram mini app', 'AWS', 'Strava API', 'OpenAI api'],
					url: 'https://begifly.com/',
					github: 'https://github.com/begifly',
					period: '2024 по настоящее'
				}
			]
		},
		en: {
			title: 'Projects',
			items: [
				{
					name: 'CrawlerX',
					description: 'Network of parsers for web scraping automation. Scalable system with support for various parsing types, data processing and integration with external APIs.',
					technologies: ['AWS SQS', 'Playwright', 'Svelte', 'PostgreSQL', 'Rails API', 'Sidekiq'],
					url: 'https://crawlerx.com',
					github: 'https://github.com/crawlerx',
					period: '2024 - Present'
				},
				{
					name: 'Begifly',
					description: 'Flight management and airline booking platform. Integrated system with airline APIs, payment processing and real-time notifications.',
					technologies: ['Rails API', 'Svelte', 'Telegram mini app', 'AWS', 'Strava API', 'OpenAI api'],
					url: 'https://begifly.com',
					github: 'https://github.com/begifly',
					period: '2024 - Present'
				}
			]
		}
	};
	
	$: info = projects[isEnglish ? 'en' : 'ru'];
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-2">
			<Github class="w-5 h-5 text-primary" />
			<CardTitle>{info.title}</CardTitle>
		</div>
	</CardHeader>
	<CardContent class="space-y-6">
		{#each info.items as project}
			<div class="border-l-4 border-primary pl-4">
				<div class="flex items-start justify-between mb-3">
					<div class="flex-1">
						{#if project.url}
							<h3 class="text-lg font-semibold text-foreground">
								<a href={project.url} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
									{project.name}
								</a>
							</h3>
						{:else}
							<h3 class="text-lg font-semibold text-foreground">{project.name}</h3>
						{/if}
						{#if project.period}
							<p class="text-sm text-muted-foreground mt-1">{project.period}</p>
						{/if}
					</div>
					<div class="flex gap-2">
						{#if project.url}
							<a href={project.url} target="_blank" rel="noopener" class="text-primary hover:text-primary/80 transition-colors">
								<ExternalLink class="w-4 h-4" />
							</a>
						{/if}
						{#if project.github}
							<a href={project.github} target="_blank" rel="noopener" class="text-muted-foreground hover:text-primary transition-colors">
								<Github class="w-4 h-4" />
							</a>
						{/if}
					</div>
				</div>
				<p class="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">{project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.technologies as tech}
						<Badge variant="outline" class="text-xs">{tech}</Badge>
					{/each}
				</div>
			</div>
		{/each}
	</CardContent>
</Card>
