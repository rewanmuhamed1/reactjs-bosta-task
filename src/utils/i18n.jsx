import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translateEN from '../assets/locales/en/translate.json';
import translateAR from '../assets/locales/ar/translate.json';

const resources = {
    en: {
        translation: translateEN
    },
    ar: {
        translation: translateAR
    }
};

i18n.use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'ar',
        detection: {
            order: ['localStorage', 'cookie', 'navigator'],
            caches: ['localStorage', 'cookie'],
          },
        interpolation: {
            escapeValue: false 
        }
    });

export default i18n;