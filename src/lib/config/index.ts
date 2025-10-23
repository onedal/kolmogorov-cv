// Application configuration
import type { AppConfig, Language, Specialization } from '../types';

export const APP_CONFIG: AppConfig = {
	languages: ['en', 'ru'],
	specializations: ['develop', 'devops'],
	defaultLanguage: 'ru',
	defaultSpecialization: 'develop'
};

export const ROUTES = {
	HOME: '/',
	DEVELOP: {
		RU: '/develop/ru',
		EN: '/develop/en'
	},
	DEVOPS: {
		RU: '/devops/ru',
		EN: '/devops/en'
	}
} as const;

export const PDF_FILES = {
	DEVELOP: {
		RU: 'Алексей_Колмогоров_Backend_Developer_CV.pdf',
		EN: 'Alexey_Kolmogorov_Backend_Developer_CV.pdf'
	},
	DEVOPS: {
		RU: 'Алексей_Колмогоров_DevOps_Engineer_CV.pdf',
		EN: 'Alexey_Kolmogorov_DevOps_Engineer_CV.pdf'
	}
} as const;

export const CONTACT_INFO = {
	email: 'sunrise3323@gmail.com',
	linkedin: 'linkedin.com/in/kolmogorov',
	github: 'github.com/kolmogorov',
	telegram: '@megabobep'
} as const;
