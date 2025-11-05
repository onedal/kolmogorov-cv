<!-- Reusable download button component -->
<script lang="ts">
	import { Download } from 'lucide-svelte';
	import { getPdfUrl } from '$lib/utils';
	import type { Language, Specialization } from '../../types';

	export let specialization: Specialization;
	export let language: Language;
	export let downloadText: string = 'Скачать резюме PDF';
</script>

<a 
	href={getPdfUrl(specialization, language)}
	download
	class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl"
>
	<Download class="w-5 h-5" />
	{downloadText}
</a>
