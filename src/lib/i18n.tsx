import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'

import T_EN from '../locales/en.json'
import T_KO from '../locales/ko.json'

const resources = {
    en: { translation: T_EN },
    ko: { translation: T_KO },
};

export const langList = [
    { key: 'en', label: 'English' },
    { key: 'ko', label: "한국어" },
];

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',              // 기본 언어
    fallbackLng: 'en',      // 번역이 없을 경우 기본 언어
    interpolation: {
        escapeValue: false, // XSS 보호가 내장되어 있으므로 false 설정
    }
});

export default i18n;