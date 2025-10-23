<!-- Reusable contact card component -->
<script lang="ts">
	import { Mail, Linkedin, Github, MessageCircle } from 'lucide-svelte';
	import type { ContactInfo } from '../../types';

	export let contacts: ContactInfo;
	export let title: string = 'Контакты';
</script>

<div class="space-y-3">
	<div class="flex items-center gap-3">
		<Mail class="w-4 h-4 text-muted-foreground" />
		<a href="mailto:{contacts.email}" class="text-sm hover:text-primary transition-colors">{contacts.email}</a>
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
		<a href="https://t.me/{contacts.telegram.substring(1)}" target="_blank" rel="noopener" class="text-sm hover:text-primary transition-colors">{contacts.telegram}</a>
	</div>
</div>
