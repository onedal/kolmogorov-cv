// Types for the CV application

export type Language = 'en' | 'ru';
export type Specialization = 'develop' | 'devops';

export interface PersonalInfo {
	name: string;
	title: string;
	location: string;
	email: string;
	linkedin: string;
	github: string;
	telegram: string;
}

export interface WorkExperience {
	position: string;
	company: string;
	period: string;
	description: string;
	stack: string;
}

export interface Education {
	degree: string;
	specialty: string;
	thesis: string;
	university: string;
	year: string;
}

export interface Skill {
	name: string;
	level: 'advanced' | 'intermediate' | 'basic';
}

export interface Project {
	name: string;
	description: string;
	details: string[];
	technologies: string[];
	url?: string;
	github?: string;
	startYear: string;
	endYear: string;
}

export interface ContactInfo {
	email: string;
	linkedin: string;
	github: string;
	telegram: string;
}

export interface ResumeData {
	personalInfo: PersonalInfo;
	about: string;
	experience: WorkExperience[];
	education: Education[];
	skills: Skill[];
	projects: Project[];
	contacts: ContactInfo;
}

export interface AppConfig {
	languages: Language[];
	specializations: Specialization[];
	defaultLanguage: Language;
	defaultSpecialization: Specialization;
}
