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
			title: 'Проекты',
			items: [
				{
					name: 'CrawlerX',
					description: 'Сеть парсеров для автоматизации сбора данных с веб-сайтов. Масштабируемая система с поддержкой различных типов парсинга, обработки данных и интеграции с внешними API.',
					technologies: ['Ruby on Rails', 'Redis', 'Sidekiq', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
					url: 'https://crawlerx.com',
					github: 'https://github.com/crawlerx'
				},
				{
					name: 'Begifly',
					description: 'Платформа для управления полетами и бронирования авиабилетов. Интегрированная система с API авиакомпаний, обработкой платежей и уведомлениями в реальном времени.',
					technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis', 'Stripe API', 'WebSocket', 'AWS'],
					url: 'https://begifly.com',
					github: 'https://github.com/begifly'
				}
			]
		},
		en: {
			title: 'Projects',
			items: [
				{
					name: 'CrawlerX',
					description: 'Network of parsers for web scraping automation. Scalable system with support for various parsing types, data processing and integration with external APIs.',
					technologies: ['Ruby on Rails', 'Redis', 'Sidekiq', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
					url: 'https://crawlerx.com',
					github: 'https://github.com/crawlerx'
				},
				{
					name: 'Begifly',
					description: 'Flight management and airline booking platform. Integrated system with airline APIs, payment processing and real-time notifications.',
					technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis', 'Stripe API', 'WebSocket', 'AWS'],
					url: 'https://begifly.com',
					github: 'https://github.com/begifly'
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
					<h3 class="text-lg font-semibold text-foreground">{project.name}</h3>
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
				<p class="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.technologies as tech}
						<Badge variant="outline" class="text-xs">{tech}</Badge>
					{/each}
				</div>
			</div>
		{/each}
	</CardContent>
</Card>
