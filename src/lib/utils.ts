import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Language, Specialization } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLanguageFromPath(path: string): Language {
	return path.includes('/en') ? 'en' : 'ru';
}

export function getSpecializationFromPath(path: string): Specialization {
	return path.includes('/devops') ? 'devops' : 'develop';
}

export function getPdfFileName(specialization: Specialization, language: Language): string {
	const baseNames = {
		develop: {
			ru: 'Алексей_Колмогоров_Backend_Developer_CV.pdf',
			en: 'Alexey_Kolmogorov_Backend_Developer_CV.pdf'
		},
		devops: {
			ru: 'Алексей_Колмогоров_DevOps_Engineer_CV.pdf',
			en: 'Alexey_Kolmogorov_DevOps_Engineer_CV.pdf'
		}
	};
	
	return baseNames[specialization][language];
}

export function getPdfUrl(specialization: Specialization, language: Language): string {
	const fileName = getPdfFileName(specialization, language);
	// Для статических файлов используем прямой путь, браузер сам обработает кодирование
	return `/cv/${fileName}`;
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
