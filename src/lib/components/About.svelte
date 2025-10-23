<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import { User } from 'lucide-svelte';
	
	$: currentPath = $page.url.pathname;
	$: isDevOps = currentPath.includes('/devops');
	$: isEnglish = currentPath.includes('/en');
	
	const content = {
		ru: {
			title: 'О себе',
			develop: 'Senior Backend Engineer с 10+ летним опытом разработки высоконагруженных систем и микросервисов. Специализируюсь на Ruby, Ruby on Rails, архитектуре микросервисов и облачных технологиях. Имею опыт руководства командами разработки и проектирования сложных систем.',
			devops: 'DevOps инженер с глубокими знаниями в области автоматизации, контейнеризации и облачных технологий. Опыт работы с Docker, Kubernetes, AWS и настройки CI/CD пайплайнов. Специализируюсь на обеспечении надежности и масштабируемости инфраструктуры.'
		},
		en: {
			title: 'About Me',
			develop: 'Senior Backend Engineer with 10+ years of experience developing high-load systems and microservices. Specialized in Ruby, Ruby on Rails, microservices architecture and cloud technologies. Have experience leading development teams and designing complex systems.',
			devops: 'DevOps Engineer with deep knowledge in automation, containerization and cloud technologies. Experience with Docker, Kubernetes, AWS and setting up CI/CD pipelines. Specialized in ensuring infrastructure reliability and scalability.'
		}
	};
	
	$: info = content[isEnglish ? 'en' : 'ru'];
	$: description = isDevOps ? info.devops : info.develop;
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-2">
			<User class="w-5 h-5 text-primary" />
			<CardTitle>{info.title}</CardTitle>
		</div>
	</CardHeader>
	<CardContent>
		<p class="text-muted-foreground leading-relaxed">{description}</p>
	</CardContent>
</Card>
