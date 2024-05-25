import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./i18n-en.json";
import de from "./i18n-de.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
