<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import Badge from '$lib/components/ui/badge.svelte';
	import { ExternalLink, Github } from 'lucide-svelte';
	
	function selectSpecialization(specialization) {
		goto(`/${specialization}/ru`);
	}
</script>

<svelte:head>
	<title>Алексей Колмогоров - Senior Backend Engineer | CV</title>
	<meta name="description" content="Опытный backend разработчик с 10+ летним опытом в Ruby on Rails, микросервисах и DevOps. Специализация: Backend Development и DevOps Engineering." />
	<meta name="keywords" content="backend developer, ruby on rails, микросервисы, devops, aws, kubernetes, docker, алексей колмогоров, резюме" />
</svelte:head>
	
	const projects = [
		{
			name: 'CrawlerX',
			description: 'Network of parsers for automating data collection from websites',
			details: [
				'Scalable system with support for various parsing types',
				'Real-time processing of large data volumes',
				'Integration with external APIs and monitoring systems',
				'Automatic proxy management and bypass blocking',
				'Queue system for load distribution'
			],
			technologies: ['Ruby on Rails', 'Redis', 'Sidekiq', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
			url: 'https://crawlerx.com',
			github: 'https://github.com/crawlerx',
			startYear: '2022',
			endYear: 'present'
		},
		{
			name: 'Begifly',
			description: 'Flight management and booking platform',
			details: [
				'Integrated system with airline APIs',
				'Payment processing through Stripe and other payment systems',
				'Real-time notifications via WebSocket',
				'Booking and cancellation management system',
				'Mobile application with push notifications'
			],
			technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis', 'Stripe API', 'WebSocket', 'AWS'],
			url: 'https://begifly.com',
			github: 'https://github.com/begifly',
			startYear: '2021',
			endYear: 'present'
		}
	];
</script>

<svelte:head>
	<title>Alexey Kolmogorov - CV</title>
	<meta name="description" content="Alexey Kolmogorov Resume - Backend Developer" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 relative overflow-hidden">
	<!-- Decorative elements -->
	<div class="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
	<div class="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style="animation-delay: 2s;"></div>
	<div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style="animation-delay: 4s;"></div>
	
	<div class="max-w-6xl mx-auto px-4 relative z-10">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-gray-800 mb-2">Alexey Kolmogorov</h1>
			<p class="text-xl text-gray-600">Senior Backend Engineer</p>
		</div>
		
		<!-- Specialization Selection -->
		<div class="mb-12">
			<h2 class="text-2xl font-bold text-center text-gray-800 mb-8">My Resumes</h2>
			<div class="grid md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
				<button 
					on:click={() => selectSpecialization('develop')}
					class="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-xl transition-all duration-300 text-left hover:scale-105"
				>
					<div class="text-4xl mb-4">⚙️</div>
					<h3 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600">Backend Developer CV</h3>
					<p class="text-gray-600">Ruby, Rails, AWS, Docker, Kubernetes, Microservices</p>
				</button>
				
				<button 
					on:click={() => selectSpecialization('devops')}
					class="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl hover:border-secondary-500 hover:shadow-xl transition-all duration-300 text-left hover:scale-105"
				>
					<div class="text-4xl mb-4">🚀</div>
					<h3 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-secondary-600">DevOps Engineer CV</h3>
					<p class="text-gray-600">Docker, Kubernetes, AWS, CI/CD, Infrastructure</p>
				</button>
			</div>
		</div>
		
		<!-- Projects -->
		<div class="mb-12">
			<h2 class="text-2xl font-bold text-center text-gray-800 mb-8">My Personal Projects</h2>
			<div class="max-w-5xl mx-auto">
				<div class="relative">
					<!-- Vertical timeline line -->
					<div class="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-primary via-primary to-primary h-full hidden md:block"></div>
					
					{#each projects as project, index}
						<div class="relative flex items-center mb-12">
							<!-- Mobile version - full width -->
							<div class="w-full md:hidden">
								<div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-primary">
									<div class="flex items-center justify-between mb-3">
										<div class="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
											{project.startYear} - {project.endYear}
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
									<h3 class="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
									<p class="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
									<ul class="text-sm text-muted-foreground mb-3 space-y-1">
										{#each project.details.slice(0, 3) as detail}
											<li class="flex items-start">
												<span class="text-primary mr-2">•</span>
												<span>{detail}</span>
											</li>
										{/each}
									</ul>
									<div class="flex flex-wrap gap-1">
										{#each project.technologies.slice(0, 4) as tech}
											<Badge variant="outline" class="text-xs">{tech}</Badge>
										{/each}
									</div>
								</div>
							</div>
							
							<!-- Desktop version - timeline -->
							<div class="hidden md:flex w-full">
								<!-- Left side (even indices) -->
								{#if index % 2 === 0}
									<div class="w-1/2 pr-8 text-right">
										<div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-primary">
											<div class="flex items-center justify-between mb-3">
												<div class="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
													{project.startYear} - {project.endYear}
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
											<h3 class="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
											<p class="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
											<ul class="text-sm text-muted-foreground mb-3 space-y-1">
												{#each project.details.slice(0, 3) as detail}
													<li class="flex items-start">
														<span class="text-primary mr-2">•</span>
														<span>{detail}</span>
													</li>
												{/each}
											</ul>
											<div class="flex flex-wrap gap-1">
												{#each project.technologies.slice(0, 4) as tech}
													<Badge variant="outline" class="text-xs">{tech}</Badge>
												{/each}
											</div>
										</div>
									</div>
									
									<!-- Central point -->
									<div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
									
									<!-- Right side (empty for even) -->
									<div class="w-1/2 pl-8"></div>
								{:else}
									<!-- Left side (empty for odd) -->
									<div class="w-1/2 pr-8"></div>
									
									<!-- Central point -->
									<div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
									
									<!-- Right side (odd indices) -->
									<div class="w-1/2 pl-8">
										<div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-r-4 border-primary">
											<div class="flex items-center justify-between mb-3">
												<div class="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
													{project.startYear} - {project.endYear}
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
											<h3 class="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
											<p class="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
											<ul class="text-sm text-muted-foreground mb-3 space-y-1">
												{#each project.details.slice(0, 3) as detail}
													<li class="flex items-start">
														<span class="text-primary mr-2">•</span>
														<span>{detail}</span>
													</li>
												{/each}
											</ul>
											<div class="flex flex-wrap gap-1">
												{#each project.technologies.slice(0, 4) as tech}
													<Badge variant="outline" class="text-xs">{tech}</Badge>
												{/each}
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		
		<!-- Contacts -->
		<div class="mb-12">
			<div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Contacts</h2>
				<div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
					<div class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-gray-800">Email</h3>
								<a href="mailto:alex@kolmogorov.dev" class="text-blue-600 hover:text-blue-700 transition-colors">alex@kolmogorov.dev</a>
							</div>
						</div>
					</div>
					
					<div class="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.46-2.07 4.521-1.164 1.06-2.723 1.639-4.498 1.639-1.775 0-3.334-.579-4.498-1.639-1.174-1.061-1.901-2.663-2.07-4.521-.034-.374-.034-.748 0-1.122.169-1.858.896-3.46 2.07-4.521C4.666 1.456 6.225.877 8 .877s3.334.579 4.498 1.639c1.174 1.061 1.901 2.663 2.07 4.521.034.374.034.748 0 1.122z"/>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-gray-800">Telegram</h3>
								<a href="https://t.me/megabobep" target="_blank" rel="noopener" class="text-purple-600 hover:text-purple-700 transition-colors">@megabobep</a>
							</div>
						</div>
					</div>
					
					<div class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-gray-800">GitHub</h3>
								<a href="https://github.com/onedal" target="_blank" rel="noopener" class="text-green-600 hover:text-green-700 transition-colors">github.com/onedal</a>
							</div>
						</div>
					</div>
					
					<div class="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-gray-800">LinkedIn</h3>
								<a href="https://linkedin.com/in/kolmogorov" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-700 transition-colors">linkedin.com/in/kolmogorov</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
