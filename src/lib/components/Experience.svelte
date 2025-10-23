<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import Badge from '$lib/components/ui/badge.svelte';
	import { Briefcase } from 'lucide-svelte';
	
	$: currentPath = $page.url.pathname;
	$: isDevOps = currentPath.includes('/devops');
	$: isEnglish = currentPath.includes('/en');
	
	const experience = {
		ru: {
			title: 'Опыт работы',
			develop: [
				{
					position: 'Backend Engineer',
					company: 'Viory',
					period: 'Декабрь 2024 — настоящее время',
					description: 'Проектирование и разработка решений для стриминга и хранения видеоконтента. Разработал отказоустойчивый и высокопроизводительный сервис транскодинга видео. Оптимизировал систему авторизации и улучшил user flow для повышения удобства пользователей.',
					stack: 'Ruby, Ruby on Rails, Open API, AWS, YandexCloud, Postgresql'
				},
				{
					position: 'Backend Engineer',
					company: 'Arival Bank',
					period: 'Декабрь 2022 — Декабрь 2024',
					description: 'Проектирование биллинговой системы: спроектировал и разработал с нуля event-driven микросервис для биллинга. Реализовал микросервис для настраиваемого планового удаления данных на основе событий.',
					stack: 'Ruby, Sinatra, Golang, DRY libs, AWS, K8S, Docker, GRPC'
				},
				{
					position: 'Senior Backend Engineer',
					company: 'Oneclick LIFE (проект Looky)',
					period: 'Ноябрь 2021 — Декабрь 2022',
					description: 'Проектировал и разрабатывал критически важные микросервисы, включая сервис авторизации. Интеграция с Instagram: реализовал сложный пайплайн по сбору и фильтрации данных пользователей.',
					stack: 'Ruby, Typescript, Ruby on rails, AWS (more 25+ services), K8S, terraform, Docker, OpenAPI'
				},
				{
					position: 'Тимлид разработки и DevOps',
					company: 'ООО "БИПТИК"',
					period: 'Сентябрь 2017 — Ноябрь 2021',
					description: 'Руководил командой разработки из 5 человек. Проектировал и внедрял DevOps-архитектуру с нуля. Разработал систему на базе Kubernetes, автоматически выдающую пользователю уникальный IP-адрес.',
					stack: 'Ruby, AWS (more 25+ services), K8S, terraform, Docker, OpenAPI'
				},
				{
					position: 'Middle Ruby On Rails Developer',
					company: 'Biptik Pte Ltd',
					period: 'Сентябрь 2015 — Сентябрь 2018',
					description: 'Проектирование архитектуры и реализация backend-логики на Ruby on Rails. Интеграция API социальных сетей. Разработка серверлесс-решений на базе AWS Lambda.',
					stack: 'Ruby, AWS (more 25+ services), Serverless framework, GraphQL'
				}
			],
			devops: [
				{
					position: 'Senior DevOps Engineer',
					company: 'CloudTech',
					period: '2022 - настоящее время',
					description: 'Настройка и поддержка Kubernetes кластеров. Автоматизация процессов развертывания. Работа с AWS и мониторингом инфраструктуры.',
					stack: 'Docker, Kubernetes, AWS, Terraform, CI/CD'
				},
				{
					position: 'DevOps Engineer',
					company: 'DataFlow',
					period: '2020 - 2022',
					description: 'Настройка CI/CD пайплайнов. Работа с Docker контейнерами и оркестрацией. Обеспечение безопасности и мониторинга систем.',
					stack: 'Docker, Kubernetes, AWS, Terraform, CI/CD'
				},
				{
					position: 'System Administrator',
					company: 'IT Solutions',
					period: '2018 - 2020',
					description: 'Администрирование Linux серверов. Настройка веб-серверов и баз данных. Изучение автоматизации и контейнеризации.',
					stack: 'Linux, Docker, AWS, CI/CD'
				}
			]
		},
		en: {
			title: 'Work Experience',
			develop: [
				{
					position: 'Backend Engineer',
					company: 'Viory',
					period: 'December 2024 — Present',
					description: 'Designing and developing solutions for video streaming and storage. Developed a fault-tolerant and high-performance video transcoding service. Optimized authorization system and improved user flow.',
					stack: 'Ruby, Ruby on Rails, Open API, AWS, YandexCloud, Postgresql'
				},
				{
					position: 'Backend Engineer',
					company: 'Arival Bank',
					period: 'December 2022 — December 2024',
					description: 'Billing system design: designed and developed from scratch an event-driven microservice for billing. Implemented a microservice for configurable scheduled data deletion based on events.',
					stack: 'Ruby, Sinatra, Golang, DRY libs, AWS, K8S, Docker, GRPC'
				},
				{
					position: 'Senior Backend Engineer',
					company: 'Oneclick LIFE (Looky project)',
					period: 'November 2021 — December 2022',
					description: 'Designed and developed critical microservices, including authorization service. Instagram integration: implemented complex pipeline for collecting and filtering user data.',
					stack: 'Ruby, Typescript, Ruby on rails, AWS (more 25+ services), K8S, terraform, Docker, OpenAPI'
				},
				{
					position: 'Development Team Lead and DevOps',
					company: 'BIPTIK LLC',
					period: 'September 2017 — November 2021',
					description: 'Led a development team of 5 people. Designed and implemented DevOps architecture from scratch. Developed a Kubernetes-based system that automatically assigns unique IP addresses to users.',
					stack: 'Ruby, AWS (more 25+ services), K8S, terraform, Docker, OpenAPI'
				},
				{
					position: 'Middle Ruby On Rails Developer',
					company: 'Biptik Pte Ltd',
					period: 'September 2015 — September 2018',
					description: 'Architecture design and backend logic implementation on Ruby on Rails. Social media API integration. Development of serverless solutions based on AWS Lambda.',
					stack: 'Ruby, AWS (more 25+ services), Serverless framework, GraphQL'
				}
			],
			devops: [
				{
					position: 'Senior DevOps Engineer',
					company: 'CloudTech',
					period: '2022 - Present',
					description: 'Setting up and maintaining Kubernetes clusters. Automating deployment processes. Working with AWS and infrastructure monitoring.',
					stack: 'Docker, Kubernetes, AWS, Terraform, CI/CD'
				},
				{
					position: 'DevOps Engineer',
					company: 'DataFlow',
					period: '2020 - 2022',
					description: 'Setting up CI/CD pipelines. Working with Docker containers and orchestration. Ensuring system security and monitoring.',
					stack: 'Docker, Kubernetes, AWS, Terraform, CI/CD'
				},
				{
					position: 'System Administrator',
					company: 'IT Solutions',
					period: '2018 - 2020',
					description: 'Linux server administration. Setting up web servers and databases. Learning automation and containerization.',
					stack: 'Linux, Docker, AWS, CI/CD'
				}
			]
		}
	};
	
	$: info = experience[isEnglish ? 'en' : 'ru'];
	$: jobs = isDevOps ? info.devops : info.develop;
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-2">
			<Briefcase class="w-5 h-5 text-primary" />
			<CardTitle>{info.title}</CardTitle>
		</div>
	</CardHeader>
	<CardContent class="space-y-6">
		{#each jobs as job}
			<div class="border-l-4 border-primary pl-4">
				<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
					<h3 class="text-lg font-semibold text-foreground">{job.position}</h3>
					<span class="text-sm text-muted-foreground">{job.period}</span>
				</div>
				<p class="text-primary font-medium mb-2">{job.company}</p>
				<p class="text-muted-foreground mb-3">{job.description}</p>
				<div class="flex flex-wrap gap-1">
					{#each job.stack.split(', ') as tech}
						<Badge variant="outline" class="text-xs">{tech}</Badge>
					{/each}
				</div>
			</div>
		{/each}
	</CardContent>
</Card>
