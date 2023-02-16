import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next"; // este es el conector con react
import i18next from "i18next"; // esta es la librería

i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: "es", // este es el lenguaje para cuando no encontremos una traducción
  lng: "es", // este es el lenguaje que elegimos
  resources: {
    es: {
      global: {
        login: {
          loginTitle: "Logeo",
        },
        register: {
          registerTitle: "Registro",
        },
      },
    },
    en: {
      global: {
        login: {
          loginTitle: "Login",
        },
        register: {
          registerTitle: "Register",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
