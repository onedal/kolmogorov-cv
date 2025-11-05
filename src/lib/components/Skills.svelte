<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import Badge from '$lib/components/ui/badge.svelte';
	import { Code } from 'lucide-svelte';
	
	$: currentPath = $page.url.pathname;
	$: isDevOps = currentPath.includes('/devops');
	$: isEnglish = currentPath.includes('/en');
	
	const skills = {
		ru: {
			title: 'Навыки',
			develop: {
				advanced: ['Ruby', 'Ruby On Rails', 'GraphQL', 'OpenApi', 'ECS', 'Github Actions', 'Design Microservice', 'Serverless architecture', 'Docker', 'CI/CD', 'REST API', 'JSON API', 'Helm', 'playwright'],
				intermediate: ['Linux', 'kafka', 'aws', 'Terraform', 'CDK', 'Kubernetes', 'Selectel', 'MongoDB', 'PostgreSQL', 'TypeScript'],
				basic: []
			},
			devops: {
				advanced: ['OpenApi', 'ECS', 'Github Actions', 'Design Microservice', 'Serverless architecture', 'Docker', 'CI/CD', 'REST API', 'JSON API', 'RUBY', 'Helm'],
				intermediate: ['Linux', 'kafka', 'Terraform', 'AWS (more 30 services)', 'AWS CDK', 'Kubernetes', 'Selectel', 'MongoDB', 'PostgreSQL', 'TypeScript'],
				basic: []
			}
		},
		en: {
			title: 'Skills',
			develop: {
				advanced: ['Ruby', 'Ruby on Rails', 'GraphQL', 'OpenAPI', 'ECS', 'Github Actions', 'Design Microservice', 'Serverless architecture', 'Docker', 'CI/CD', 'REST API', 'JSON API', 'Helm', 'Playwright'],
				intermediate: ['Linux', 'Kafka', 'AWS', 'Terraform', 'CDK', 'Kubernetes', 'Selectel', 'MongoDB', 'PostgreSQL', 'TypeScript'],
				basic: ['Golang']
			},
			devops: {
				advanced: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Linux', 'Kafka'],
				intermediate: ['Ruby', 'Ruby on Rails', 'GraphQL', 'OpenAPI', 'ECS', 'Github Actions', 'Design Microservice', 'Serverless architecture', 'REST API', 'JSON API', 'Helm', 'Playwright'],
				basic: ['Golang', 'MongoDB', 'PostgreSQL', 'TypeScript']
			}
		}
	};
	
	$: info = skills[isEnglish ? 'en' : 'ru'];
	$: skillData = isDevOps ? info.devops : info.develop;
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-2">
			<Code class="w-5 h-5 text-primary" />
			<CardTitle>{info.title}</CardTitle>
		</div>
	</CardHeader>
	<CardContent class="space-y-4">
		<div>
			<h4 class="text-sm font-medium text-muted-foreground mb-2">Продвинутый уровень</h4>
			<div class="flex flex-wrap gap-2">
				{#each skillData.advanced as skill}
					<Badge variant="default">{skill}</Badge>
				{/each}
			</div>
		</div>
		
		<div>
			<h4 class="text-sm font-medium text-muted-foreground mb-2">Средний уровень</h4>
			<div class="flex flex-wrap gap-2">
				{#each skillData.intermediate as skill}
					<Badge variant="secondary">{skill}</Badge>
				{/each}
			</div>
		</div>
		
		{#if skillData.basic && skillData.basic.length > 0}
			<div>
				<h4 class="text-sm font-medium text-muted-foreground mb-2">Базовый уровень</h4>
				<div class="flex flex-wrap gap-2">
					{#each skillData.basic as skill}
						<Badge variant="outline">{skill}</Badge>
					{/each}
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
