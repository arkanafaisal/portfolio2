import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './data/locales/en.json';
import idTranslation from './data/locales/id.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      id: {
        translation: idTranslation,
      },
    },
    lng: 'id', // Default language is Indonesian
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safeguards against XSS
    },
  });

export default i18n;
