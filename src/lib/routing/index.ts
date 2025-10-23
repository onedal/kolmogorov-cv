// Routing utilities and navigation helpers
import { goto } from '$app/navigation';
import type { Language, Specialization } from '../types';

export function navigateToResume(specialization: Specialization, language: Language) {
	goto(`/${specialization}/${language}`);
}

export function navigateToHome() {
	goto('/');
}

export function getResumeUrl(specialization: Specialization, language: Language): string {
	return `/${specialization}/${language}`;
}

export function getSpecializationUrl(specialization: Specialization): string {
	return `/${specialization}`;
}

// Navigation breadcrumbs
export function getBreadcrumbs(currentPath: string) {
	const segments = currentPath.split('/').filter(Boolean);
	const breadcrumbs = [{ name: 'Home', path: '/' }];
	
	if (segments.length > 0) {
		const specialization = segments[0] as Specialization;
		breadcrumbs.push({
			name: specialization === 'develop' ? 'Backend Developer' : 'DevOps Engineer',
			path: `/${specialization}`
		});
	}
	
	if (segments.length > 1) {
		const language = segments[1] as Language;
		breadcrumbs.push({
			name: language === 'en' ? 'English' : 'Русский',
			path: `/${segments[0]}/${language}`
		});
	}
	
	return breadcrumbs;
}
