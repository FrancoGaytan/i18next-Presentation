import i18next from "i18next";

import global_es from "../localization/es/global.json";
import global_en from "../localization/en/global.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  // ver xq esto todavia no lo puedo importar desde el index
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
