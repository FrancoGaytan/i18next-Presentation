import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import global_es from "../localization/es/global.json";
import global_en from "../localization/en/global.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  fallbackLng: "es", // este es el lenguaje para cuando no encontremos una traducción
  lng: "es", // este es el lenguaje que elegimos
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

export default i18next;
