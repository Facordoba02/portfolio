import React from 'react'
import { useTranslation } from 'react-i18next'
import Form from '../Form/Form';
import { FaExclamation } from "react-icons/fa";
import { FaLinkedin, FaLocationDot, FaGithub   } from "react-icons/fa6";

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
              <div className="contact__about">
                <ul className="contact__list">
                  <li className="contact__item">
                    <FaLocationDot/>
                    Buenos Aires, Argentina
                  </li>
                  <li className="contact__item">
                    <FaGithub/>
                    Github
                  </li>
                  <li className="contact__item">
                    <FaLinkedin/>
                    Linkedin
                  </li>
                </ul>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="footer__copy">
        <a className="footer__link" href="https://linkedin.com.ar">&copy; Facundo Córdoba - 2025</a>
      </section>
    </footer>
  )
}
