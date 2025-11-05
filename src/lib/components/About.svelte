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
			develop: 'Senior Backend Engineer с более чем 10-летним опытом разработки и построения высоконагруженных, отказоустойчивых систем. Глубокая экспертиза в backend-инженерии, архитектуре и DevOps. Участвовал в проектировании и эволюции сложных распределённых систем — как с нуля, так и на этапе масштабирования. Имею опыт развертывания и поддержки production-инфраструктуры в AWS и GCP, включая CI/CD, мониторинг и fault-tolerant окружения.\n\nРуководил командой разработчиков из 5 человек, занимался менторством и формированием инженерной культуры — разработал систему грейдов и проводил технические интервью.\n\nОсновной технологический стек: Ruby, TypeScript, Kubernetes, Terraform, AWS, PostgreSQL. Интересуюсь web scraping, distributed systems и blockchain-инфраструктурой. Всегда стремлюсь повышать надёжность и эффективность систем, оптимизировать процессы и внедрять современные инженерные практики.',
			devops: 'Senior Software Engineer с более чем 10-летним опытом разработки и построения высоконагруженных, отказоустойчивых систем. Глубокая экспертиза в backend-инженерии, архитектуре и DevOps. Участвовал в проектировании и эволюции сложных распределённых систем — как с нуля, так и на этапе масштабирования. Имею опыт развертывания и поддержки production-инфраструктуры в AWS и GCP, включая CI/CD, мониторинг и fault-tolerant окружения.\n\nРуководил командой разработчиков из 5 человек, занимался менторством и формированием инженерной культуры — разработал систему грейдов и проводил технические интервью.\n\nОсновной технологический стек: Ruby, TypeScript, Kubernetes, Terraform, AWS, PostgreSQL. Интересуюсь web scraping, distributed systems и blockchain-инфраструктурой. Всегда стремлюсь повышать надёжность и эффективность систем, оптимизировать процессы и внедрять современные инженерные практики.'
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
		<p class="text-muted-foreground leading-relaxed whitespace-pre-line">{description}</p>
	</CardContent>
</Card>
