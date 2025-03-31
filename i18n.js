import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: "Hi! I'm Facundo Córdoba",
      profession: "Front-End Developer",
      view: "Explore my work",
      see: "View Project",
      contact: "Contact Me",
      tContact: "Get In Touch",
      formName: "Your name",
      formEmail: "Your email",
      formMsg: "Message",
      formBtn: "Send",

      //--
			project1: "Created a responsive website from scratch for a healthcare system. Performed maintenance tasks to manage news, medical records, and a virtual bot.",

			//--
			project2: "The home page has been visually refactored. New sections have been added. The navigation bar and footer have been completely refactored.",

			//--
			project3: "Created for a coffee shop in my city. Responsive design, optimization, and SEO were implemented.",

      //--
      project4: "Creation of a digital library for the Global Penguin Society. Responsive and SEO-optimized."
    },
  },
  es: {
    translation: {
      about: "Hola! Soy Facundo Córdoba",
      profession: "Desarrollador Front-End",
      view: "Explora mis trabajos",
      see: "Ver Proyecto",
      contact: "Contacto",
      tContact: "Conecta Conmigo",
      formName: "Nombre",
      formEmail: "Email",
      formMsg: "Mensaje",
      formBtn: "Enviar",

      //--
			project1:"Creación de un sitio web responsive desde cero para un sistema de salud. Realización de tareas de mantenimiento para gestionar noticias, historiales médicos y un bot virtual. ",

			//--
			project2:"Se hizo un refactor visual de la página principal. Adición de nuevas secciones. Refactor del navbar y footer por completo.",

			//--
			project3:"Dirigida a una cafetería de mi ciudad. Desde cero. Se le realizo el responsive, optimización y SEO. ",

      //--
      project4: "Creación de biblioteca digital para Global Penguin Society. Responsive, SEO y optimizada. ",

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
