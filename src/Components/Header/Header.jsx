import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import i18n from "../../../i18n";
import { GrLanguage } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";

export const Header = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();

  const changeLanguage = (lng) => {
    setLang(lng)
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <section className="header__nav">
        <div className="header__nav__wrapper">
          <p className="header__logo">
            Facundo.
          </p>
          <div className="header__nav__links">
            <a href="#contact">{t("contact")}</a>
            {
              lang === "es" ? (
                <a className="header__button" onClick={() => changeLanguage("en")}>
                  <span>
                    <GrLanguage />
                  </span> English
                </a>
              ) : (
                <a className="header__button" onClick={() => changeLanguage("es")}>
                  <span>
                    <GrLanguage />
                  </span> Español
                </a>
              )
            }
          </div>
        </div>
      </section>
      <section className="header__container">
        <div className="header__about">
          <div className="header__img">
            {/* <img src="./3.jpeg" alt="" /> */}
          </div>
          <div className="header__desc">
            <p className="header__subtitle">{t("about")}</p>
            <h1 className="header__title">{t("profession")}</h1>
            {
              lang === "es" ? (
                <a href="" className="header__download">Descargar CV <FaFilePdf /></a>
              ) : (
                <a href="" className="header__download">Resume <FaFilePdf /></a>
              )
            }
          </div>
        </div>
        <a className="header__links" href="#projects">
          <p>{t("view")}</p>
          <span>
            <IoIosArrowDropdownCircle />
          </span>
        </a>
      </section>
    </header>
  );
};
