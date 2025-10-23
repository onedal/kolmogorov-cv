<!-- Reusable resume card component -->
<script lang="ts">
	import Card from '../ui/card.svelte';
	import CardHeader from '../ui/card-header.svelte';
	import CardContent from '../ui/card-content.svelte';
	import CardTitle from '../ui/card-title.svelte';
	import type { LucideIcon } from 'lucide-svelte';

	export let title: string;
	export let icon: LucideIcon;
	export let iconClass: string = 'text-primary';
	export let children: any;
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-2">
			<svelte:component this={icon} class="w-5 h-5 {iconClass}" />
			<CardTitle>{title}</CardTitle>
		</div>
	</CardHeader>
	<CardContent>
		{@render children()}
	</CardContent>
</Card>
