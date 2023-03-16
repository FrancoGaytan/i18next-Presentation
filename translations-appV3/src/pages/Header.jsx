import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, translate] = useTranslation("global");

  return (
    <div className="header">
      <div className="title">I18Next Presentation</div>
      <section className="buttons">
        <button
          className="esFlag"
          onClick={() => translate.changeLanguage("es")}
        ></button>
        <button
          className="enFlag"
          onClick={() => translate.changeLanguage("en")}
        ></button>
      </section>
    </div>
  );
};

export default Header;
