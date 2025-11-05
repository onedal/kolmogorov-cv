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
					company: 'Arival Bank',
					companyUrl: 'https://arival.com/',
					period: 'Декабрь 2023 — октябрь 2025',
					items: [
						'Спроектировал и развернул с нуля event-driven микросервис для биллинга. Сервис отслеживал использование клиентских ресурсов, выполнял проверку и расчет каждого ресурса с учетом плана клиента, что позволило увеличить доход компании.',
						'Реализовал хайлоад-сервис для data retention на основе евентов, что привело к сокращению трат инфраструктуру компании.',
						'Оптимизация существующих решений: ускорил несколько тяжёлых запросов к PostgreSQL в 5 раз, сократил потребление памяти в Sidekiq-сервисах, устранив memory leaks и избыточные аллокации.'
					],
					description: 'Работал над архитектурой комплаенс-системы: вёл улучшение существующих сервисов, оптимизировал код и процессы.',
					stack: 'Ruby, Sinatra, Golang, DRY libs, AWS, K8S, Docker, GRPC'
				},
				{
					position: 'Backend Engineer',
					company: 'Oneclick LIFE',
					companyUrl: 'https://oneclick.life/',
					projectName: 'Viory',
					projectUrl: 'http://viory.video/',
					period: 'март 2023 — декабрь 2023 (9 месяцев)',
					items: [
						'Разработал отказоустойчивый и высокопроизводительный сервис транскодинга видео, который ускорил появление видео на платформе после загрузки в 10 раз ("time-to-publish").',
						'Оптимизировал систему авторизации и улучшил user flow для повышения удобства пользователей, скорость онбординг пользователей увеличилась в 5 раз.',
						'Участвовал в проектировании API, разработке бизнес-логики, интеграции с внешними сервисами и обеспечении безопасности платформы.',
						'Активно участвовал в ревью кода, декомпозиции задач и развитии архитектуры проекта.'
					],
					stack: 'Ruby, Ruby on Rails, Open API, AWS, YandexCloud, Postgresql'
				},
				{
					position: 'Senior Backend Engineer',
					company: 'Oneclick LIFE',
					companyUrl: 'https://oneclick.life/',
					projectName: 'Looky',
					projectUrl: 'https://looky.com/',
					period: 'Апрель 2022 — Март 2023 (11 месяцев)',
					description: 'Проектировал и разрабатывал критически важные микросервисы, включая сервис авторизации, используемый как основа всей платформы — фокус на высокую доступностью и безопасность.',
					items: [
						'Интеграция с Instagram: реализовал сложный пайплайн по сбору и фильтрации данных пользователей, разработал несколько независимых приложений и библиотек на чистом Ruby, оптимизированных под высокую нагрузку, система кеширования значительно помогла сократить траты',
						'Работа в AWS: разработал и задеплоил несколько микросервисов в среде AWS Lambda, обеспечив масштабируемость и снижение затрат.',
						'DevOps & CI/CD: спроектировал пайплайны автоматического развёртывания и доставки обновлений, внедрил инфраструктурный подход «архитектура как код» для микросервисов.'
					],
					stack: 'Ruby, Typescript, Ruby on rails, AWS (more 25+ services), K8S, terraform, Docker, OpenAPI'
				},
				{
					position: 'Тимлид разработки и DevOps',
					company: 'ООО "БИПТИК"',
					companyUrl: 'https://www.rusprofile.ru/id/11848858',
					period: 'Сентябрь 2017 — Март 2022 (4 года и 6 месяцев)',
					description: 'Тимлид разработки и DevOps — Руководил командой разработки из 5 человек: занимался распределением задач, развитием команды и контролем качества.',
					items: [
						'Проектировал и внедрял DevOps-архитектуру с нуля: настраивал CI/CD-процессы, автоматизировал инфраструктуру и обеспечивал стабильную работу e-commerce платформы в продакшене.',
						'Управление командой разработки: распределение ресурсов, приоритизация задач, менторинг, внедрение системы оценки эффективности, регулярный анализ и оптимизация процессов разработки.',
						'Архитектура и DevOps: проектирование и реализация архитектуры e-commerce платформы на базе микросервисов. Работа с облачными провайдерами (AWS, Selectel), автоматизация инфраструктуры с помощью Terraform, Kubernetes и GitHub Actions.'
					],
					stack: 'Ruby, AWS (more 25+ services), K8S, terraform, Docker, OpenAPI'
				},
				{
					position: 'Middle Ruby On Rails Developer',
					company: 'Biptik Pte Ltd',
					companyUrl: 'https://www.crunchbase.com/organization/biptik',
					period: 'Сентябрь 2015 — Сентябрь 2018 (3 года)',
					description: 'Проектирование архитектуры и реализация backend-логики на Ruby on Rails',
					items: [
						'Serverless-решения на AWS (Lambda, DynamoDB, CloudFormation)',
						'Создание собственного Ruby-фреймворка для ускоренной разработки serverless-приложений',
						'Реализация стратегий оптимизации затрат на AWS (включая использование spot-инстансов и S3 Glacier)'
					],
					stack: 'Ruby, AWS (more 25+ services), Serverless framework, GraphQL'
				}
			],
			devops: [
				{
					position: 'Senior Software Engineer',
					company: 'Arival Bank',
					companyUrl: 'https://arival.com/',
					period: 'Декабрь 2023 — октябрь 2025 (1 год и 10 месяцев)',
					items: [
						'Спроектировал и развернул с нуля event-driven микросервис для биллинга. Сервис отслеживал использование клиентских ресурсов, выполнял проверку и расчет каждого ресурса с учетом плана клиента, что позволило увеличить доход компании.',
						'Реализовал хайлоад-сервис для data retention на основе евентов, что привело к сокращению трат инфраструктуру компании.',
						'Оптимизация существующих решений: ускорил несколько тяжёлых запросов к PostgreSQL в 5 раз, сократил потребление памяти в Sidekiq-сервисах, устранив memory leaks и избыточные аллокации.'
					],
					description: 'Работал над архитектурой комплаенс-системы: вёл улучшение существующих сервисов, оптимизировал код и процессы.',
					stack: 'Ruby, Sinatra, Golang, DRY libs, AWS, K8S, Docker, GRPC'
				},
				{
					position: 'Senior Software Engineer',
					company: 'Oneclick LIFE',
					companyUrl: 'https://oneclick.life/',
					projects: [
						{ name: 'Looky', url: 'https://looky.com/' },
						{ name: 'Viory', url: 'http://viory.video/' }
					],
					period: 'Апрель 2022 — декабрь 2023 (1 год 8 месяцев)',
					description: 'Проектировал и разрабатывал критически важные микросервисы, включая сервис авторизации, используемый как основа всей платформы — фокус на высокую доступностью и безопасность.',
					items: [
						'Проектировал и разработал различные микросервисы и их развертыванием в среде AWS. В основе использовали ECS, затем K8S. Разработал решение для highload на основе очередей AWS SQS и cronjobs K8S для парсинга данных.',
						'Реализовывал процессы автоматического развертывание на основе Github Actions.',
						'Участвовал в проектирование архитектуры и ее формализации в cdk (использовали typescript)',
						'Разработал отказоустойчивый и высокопроизводительный сервис транскодинга видео, который ускорил появление видео на платформе после загрузки в 10 раз ("time-to-publish").'
					],
					stack: 'Ruby, Typescript, Ruby on rails, AWS (more 25+ services), YandexCloud, K8S, terraform, Docker, OpenAPI'
				},
				{
					position: 'Тимлид разработки и DevOps',
					company: 'Biptik Pte Ltd',
					companyUrl: 'https://www.crunchbase.com/organization/biptik',
					period: 'Сентябрь 2015 — Март 2022 (6 лет и 6 месяцев)',
					description: 'Тимлид разработки и DevOps — Руководил командой разработки из 5 человек: занимался распределением задач, развитием команды и контролем качества.',
					items: [
						'Проектировал и внедрял DevOps-архитектуру с нуля: настраивал CI/CD-процессы, автоматизировал инфраструктуру и обеспечивал стабильную работу e-commerce платформы в продакшене.',
						'Управление командой разработки: распределение ресурсов, приоритизация задач, менторинг, внедрение системы оценки эффективности, регулярный анализ и оптимизация процессов разработки.',
						'Разработал систему на базе Kubernetes, автоматически выдающую пользователю уникальный IP-адрес, который он мог использовать для подключения собственного домена. Магазин поднимался и становился доступен по его домену в полностью автоматическом режиме.',
						'Serverless-решения на AWS (Lambda, DynamoDB, CloudFormation)',
						'Создание собственного Ruby-фреймворка для ускоренной разработки serverless-приложений'
					],
					stack: 'Ruby, AWS (more 25+ services), K8S, terraform, Docker, OpenAPI'
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
				<div class="text-primary font-medium mb-2">
					{#if job.companyUrl}
						<a href={job.companyUrl} target="_blank" rel="noopener noreferrer" class="hover:underline">
							{job.company}
						</a>
					{:else}
						{job.company}
					{/if}
					{#if job.projects && job.projects.length > 0}
						<span class="text-muted-foreground"> (</span>
						{#each job.projects as project, index}
							<span class="text-muted-foreground">проект </span>
							{#if project.url}
								<a href={project.url} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
									{project.name}
								</a>
							{:else}
								<span class="text-primary">{project.name}</span>
							{/if}
							{#if index < job.projects.length - 1}
								<span class="text-muted-foreground">, </span>
							{/if}
						{/each}
						<span class="text-muted-foreground">)</span>
					{:else if job.projectName}
						<span class="text-muted-foreground"> (проект </span>
						{#if job.projectUrl}
							<a href={job.projectUrl} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
								{job.projectName}
							</a>
						{:else}
							<span class="text-primary">{job.projectName}</span>
						{/if}
						<span class="text-muted-foreground">)</span>
					{/if}
				</div>
				<h3 class="text-lg font-semibold text-foreground mb-2">{job.position}</h3>
				<span class="text-sm text-muted-foreground mb-2 block">{job.period}</span>
				{#if job.description}
					<p class="text-muted-foreground mb-3">{job.description}</p>
				{/if}
				{#if job.items && job.items.length > 0}
					<ul class="text-muted-foreground mb-3 space-y-1 list-none pl-0">
						{#each job.items as item}
							<li class="flex items-start">
								<span class="mr-2 text-primary">•</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				{/if}
				<div class="flex flex-wrap gap-1">
					{#each job.stack.split(', ') as tech}
						<Badge variant="outline" class="text-xs">{tech}</Badge>
					{/each}
				</div>
			</div>
		{/each}
	</CardContent>
</Card>
