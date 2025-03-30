import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import { ko, en } from '../locales'

//* 다국어로 사용 될 리소스 
const resources = {
    en: { translation: en },
    ko: { translation: ko },
};

//* 다국어 리스트에 사용될 아이템
interface langItem {
    key: string;        // resources에 사용되는 key 코드 값
    label: string;      // 다국어 선택 메뉴에서 보여질 이름
}

//* 다국어 리스트 
export const langList: langItem[] = [
    { key: 'en', label: 'English' },
    { key: 'ko', label: "한국어" },
];

//* 다국어 초기 설정
i18n.use(initReactI18next).init({
    resources,
    lng: 'en',              // 기본 언어
    fallbackLng: 'en',      // 번역이 없을 경우 기본 언어
    interpolation: {
        escapeValue: false, // XSS 보호가 내장되어 있으므로 false 설정
    }
});

export default i18n;