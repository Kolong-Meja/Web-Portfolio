import { browser } from '$app/environment';
import { loadTranslations } from '$lib/services/translation';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const initialLocale = 'en';
	let currentLang = initialLocale;

	if (browser) {
		const storedLang = localStorage.getItem('lang');

		if (storedLang) {
			currentLang = storedLang;
		}
	}

	await loadTranslations(currentLang);

	return {};
};
