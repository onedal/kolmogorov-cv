// Centralized data management
import type { ResumeData, Language, Specialization } from '../types';

export const RESUME_DATA: Record<Language, Record<Specialization, ResumeData>> = {
	ru: {
		develop: {
			personalInfo: {
				name: 'Алексей Колмогоров',
				title: 'Senior Backend Engineer',
				location: 'Москва, Россия',
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			},
			about: 'Senior Backend Engineer с 10+ летним опытом разработки высоконагруженных систем и микросервисов. Специализируюсь на Ruby, Ruby on Rails, архитектуре микросервисов и облачных технологиях.',
			experience: [
				{
					position: 'Backend Engineer',
					company: 'Viory',
					period: 'Декабрь 2024 — настоящее время',
					description: 'Проектирование и разработка решений для стриминга и хранения видеоконтента.',
					stack: 'Ruby, Ruby on Rails, Open API, AWS, YandexCloud, Postgresql'
				}
			],
			education: [
				{
					degree: 'Магистр',
					specialty: 'Информационные системы и технологии',
					thesis: 'Разработка CI/CD сервиса на инфраструктуре AWS',
					university: 'Дальневосточный федеральный университет',
					year: '2017'
				}
			],
			skills: [
				{ name: 'Ruby', level: 'advanced' },
				{ name: 'Ruby on Rails', level: 'advanced' },
				{ name: 'AWS', level: 'intermediate' }
			],
			projects: [
				{
					name: 'CrawlerX',
					description: 'Сеть парсеров для автоматизации сбора данных с веб-сайтов',
					details: ['Масштабируемая система с поддержкой различных типов парсинга'],
					technologies: ['Ruby on Rails', 'Redis', 'Sidekiq'],
					url: 'https://crawlerx.com',
					github: 'https://github.com/crawlerx',
					startYear: '2022',
					endYear: 'настоящее время'
				}
			],
			contacts: {
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			}
		},
		devops: {
			personalInfo: {
				name: 'Алексей Колмогоров',
				title: 'DevOps Engineer',
				location: 'Москва, Россия',
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			},
			about: 'DevOps инженер с глубокими знаниями в области автоматизации, контейнеризации и облачных технологий.',
			experience: [],
			education: [],
			skills: [],
			projects: [],
			contacts: {
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			}
		}
	},
	en: {
		develop: {
			personalInfo: {
				name: 'Alexey Kolmogorov',
				title: 'Senior Backend Engineer',
				location: 'Moscow, Russia',
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			},
			about: 'Senior Backend Engineer with 10+ years of experience developing high-load systems and microservices.',
			experience: [],
			education: [],
			skills: [],
			projects: [],
			contacts: {
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			}
		},
		devops: {
			personalInfo: {
				name: 'Alexey Kolmogorov',
				title: 'DevOps Engineer',
				location: 'Moscow, Russia',
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			},
			about: 'DevOps Engineer with deep knowledge in automation, containerization and cloud technologies.',
			experience: [],
			education: [],
			skills: [],
			projects: [],
			contacts: {
				email: 'alex@kolmogorov.dev',
				linkedin: 'linkedin.com/in/kolmogorov',
				github: 'github.com/onedal',
				telegram: '@megabobep'
			}
		}
	}
};
