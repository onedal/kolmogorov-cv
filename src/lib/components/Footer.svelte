<script>
	import { page } from '$app/stores';
	import { Mail, Linkedin, Github, MessageCircle, Download } from 'lucide-svelte';
	import { getPdfUrl, getPdfFileName, getSpecializationFromPath, getLanguageFromPath } from '$lib/utils';
	
	$: currentPath = $page.url.pathname;
	$: isEnglish = currentPath.includes('/en');
	$: isDevOps = currentPath.includes('/devops');
	
	const content = {
		ru: {
			title: 'Контакты',
			downloadPdf: 'Скачать резюме PDF',
			email: 'alex@kolmogorov.dev',
			linkedin: 'linkedin.com/in/kolmogorov',
			github: 'github.com/onedal',
			telegram: '@megabobep'
		},
		en: {
			title: 'Contacts',
			downloadPdf: 'Download Resume PDF',
			email: 'alex@kolmogorov.dev',
			linkedin: 'linkedin.com/in/kolmogorov',
			github: 'github.com/onedal',
			telegram: '@megabobep'
		}
	};
	
	$: info = content[isEnglish ? 'en' : 'ru'];
	$: specialization = getSpecializationFromPath(currentPath);
	$: language = getLanguageFromPath(currentPath);
	$: pdfFileName = getPdfFileName(specialization, language);
	$: pdfUrl = getPdfUrl(specialization, language);
</script>

<footer class="bg-white border-t border-gray-200 mt-12">
	<div class="max-w-6xl mx-auto px-4 py-8">
		<div class="text-center">
			<h3 class="text-xl font-bold text-gray-800 mb-6">{info.title}</h3>
			
			<!-- Кнопка скачивания PDF -->
			<div class="mb-8">
				<a 
					href={pdfUrl}
					download={pdfFileName}
					class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl"
				>
					<Download class="w-5 h-5" />
					{info.downloadPdf}
				</a>
			</div>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
				<div class="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300">
					<Mail class="w-6 h-6 text-blue-600 mb-2" />
					<span class="text-sm font-medium text-gray-800 mb-1">Email</span>
					<a href="mailto:{info.email}" class="text-blue-600 hover:text-blue-700 transition-colors text-sm">{info.email}</a>
				</div>
				
				<div class="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300">
					<Linkedin class="w-6 h-6 text-blue-600 mb-2" />
					<span class="text-sm font-medium text-gray-800 mb-1">LinkedIn</span>
					<a href="https://linkedin.com/in/kolmogorov" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-700 transition-colors text-sm">LinkedIn</a>
				</div>
				
				<div class="flex flex-col items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300">
					<Github class="w-6 h-6 text-green-600 mb-2" />
					<span class="text-sm font-medium text-gray-800 mb-1">GitHub</span>
					<a href="https://github.com/onedal" target="_blank" rel="noopener" class="text-green-600 hover:text-green-700 transition-colors text-sm">GitHub</a>
				</div>
				
				<div class="flex flex-col items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
					<MessageCircle class="w-6 h-6 text-purple-600 mb-2" />
					<span class="text-sm font-medium text-gray-800 mb-1">Telegram</span>
					<a href="https://t.me/{info.telegram.substring(1)}" target="_blank" rel="noopener" class="text-purple-600 hover:text-purple-700 transition-colors text-sm">{info.telegram}</a>
				</div>
			</div>
		</div>
	</div>
</footer>
