import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./config/i18n-config";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next"; // este es el conector con react
import i18next from "i18next"; // esta es la librería

/* import global_es from "./localization/es/global.json";
import global_en from "./localization/en/global.json";
 */
/* i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: 'es', // este es el lenguaje para cuando no encontremos una traducción
  lng: "es", // este es el lenguaje que elegimos
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
}); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
