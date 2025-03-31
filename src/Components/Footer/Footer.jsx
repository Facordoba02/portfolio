import React from 'react'
import { useTranslation } from 'react-i18next'
import Form from '../Form/Form';
import { FaExclamation } from "react-icons/fa";
import { FaLinkedin, FaGithub   } from "react-icons/fa6";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer" id="contact">
      <section className="contact">
        <h2 className="subtitle">
          {t("tContact")} <FaExclamation className="subtitle__exc" />
        </h2>
        <div className="contact__wrapper">
          <div className="contact__bg">
            <div className="contact__content">
              <Form />
              <div className="contact__list">
                <a href="https://github.com/Facordoba02" target="_blank" className="contact__item">
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/facucordoba" target="_blank" className="contact__item">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__copy">
        <a className="footer__link" href="https://www.linkedin.com/in/facucordoba">&copy; Facundo Córdoba - 2025</a>
      </section>
    </footer>
  )
}
