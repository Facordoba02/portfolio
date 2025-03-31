import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: "Hi! I'm Facundo Córdoba",
      profession: "Front-End Developer",
      view: "Explore my work",

      //--
			pcD1: "Responsive and optimized. SEO implemented. Includes filtering of the medical directory by query.",

			//--
			pcD2: "A visual refactor of the main index was done. New sections were added. The navbar and footer were fully refactored.",

			//--
			pcD3: "Created for a coffee shop in my city. Responsive design, optimization, and SEO were implemented.",
    },
  },
  es: {
    translation: {
      about: "Hola! Soy Facundo Córdoba",
      profession: "Desarrollador Front-End",
      view: "Explora mis trabajos",
      //--
			pcD1:"Responsive y optimizada. Tiene realizado SEO. Incluye filtrado de cartilla médica por query.",

			//--
			pcD2:"Se hizo un refactor visual del index principal. Adición de nuevas secciones. Refactor del navbar y footer por completo.",

			//--
			pcD3:"Dirigida a una cafetería de mi ciudad. Desde cero. Se le realizo el responsive, optimización y SEO. ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
