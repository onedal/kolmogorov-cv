<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardContent from '$lib/components/ui/card-content.svelte';
	import CardTitle from '$lib/components/ui/card-title.svelte';
	import { Mail, Linkedin, Github, MessageCircle } from 'lucide-svelte';
	
	$: currentPath = $page.url.pathname;
	$: isEnglish = currentPath.includes('/en');
	
	const content = {
		ru: {
			title: 'Контакты',
			email: 'sunrise3323@gmail.com',
			phone: '+7 999 059-70-82',
			location: 'Москва, Россия'
		},
		en: {
			title: 'Contact',
			email: 'sunrise3323@gmail.com',
			phone: '+7 999 059-70-82',
			location: 'Moscow, Russia'
		}
	};
	
	$: info = content[isEnglish ? 'en' : 'ru'];
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-2">
			<Mail class="w-5 h-5 text-primary" />
			<CardTitle>{info.title}</CardTitle>
		</div>
	</CardHeader>
	<CardContent class="space-y-4">
		<div class="flex items-center gap-3">
			<Mail class="w-4 h-4 text-muted-foreground" />
			<a href="mailto:{info.email}" class="text-sm hover:text-primary transition-colors">{info.email}</a>
		</div>
		<div class="flex items-center gap-3">
			<Linkedin class="w-4 h-4 text-muted-foreground" />
			<a href="https://linkedin.com/in/kolmogorov" target="_blank" rel="noopener" class="text-sm hover:text-primary transition-colors">LinkedIn</a>
		</div>
		<div class="flex items-center gap-3">
			<Github class="w-4 h-4 text-muted-foreground" />
			<a href="https://github.com/kolmogorov" target="_blank" rel="noopener" class="text-sm hover:text-primary transition-colors">GitHub</a>
		</div>
		<div class="flex items-center gap-3">
			<MessageCircle class="w-4 h-4 text-muted-foreground" />
			<a href="https://t.me/megabobep" target="_blank" rel="noopener" class="text-sm hover:text-primary transition-colors">@megabobep</a>
		</div>
	</CardContent>
</Card>
