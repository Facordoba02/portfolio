import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDropdownCircle } from "react-icons/io";
import i18n from "../../../i18n";

export const Header = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="header">
      <section className="header__nav">
        <p className="header__logo">
          <IoIosArrowBack />
          F/
          <IoIosArrowForward />
        </p>
        <div className="button-group">
          <button className="btn btn-blue" onClick={() => changeLanguage("es")}>
            Español
          </button>
          <button
            className="btn btn-green"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
        </div>
      </section>
      <section className="header__container">
        <div className="header__about">
          <div className="header__img">
            <img src="./3.jpeg" alt="" />
          </div>
          <div className="header__desc">
            <p className="header__subtitle">{t("about")}</p>
            <h1 className="header__title">{t("profession")}</h1>
          </div>
        </div>
        <div className="header__links">
          <span>{t("view")}</span>
          <IoIosArrowDropdownCircle/>
        </div>
      </section>
    </header>
  );
};
