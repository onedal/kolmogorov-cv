// Centralized state management
import { writable, derived } from 'svelte/store';
import type { Language, Specialization } from '../types';

// Global state stores
export const currentLanguage = writable<Language>('ru');
export const currentSpecialization = writable<Specialization>('develop');

// Derived stores
export const currentPath = derived(
	[currentLanguage, currentSpecialization],
	([lang, spec]) => `/${spec}/${lang}`
);

// Navigation helpers
export function setLanguage(lang: Language) {
	currentLanguage.set(lang);
}

export function setSpecialization(spec: Specialization) {
	currentSpecialization.set(spec);
}

export function getResumePath(spec: Specialization, lang: Language): string {
	return `/${spec}/${lang}`;
}
