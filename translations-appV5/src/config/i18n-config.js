import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { global_en } from "../localization/en/global.js";
import { global_es } from "../localization/es/global.js";

import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
    },
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "path",
        "subdomain",
        "navigator",
      ],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18next;
