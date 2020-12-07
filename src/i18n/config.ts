import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ns1 from './en/ns1.json';
import ns2 from './en/ns2.json';
// import ns3 from "./en/ns3.json";

export const resources = {
  en: {
    ns1,
    ns2,
    // ns3,
  },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources,
});
