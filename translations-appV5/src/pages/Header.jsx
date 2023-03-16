import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [translation, setTranslation] = useTranslation("global");

  return (
    <div className="header">
      <div className="title">
        {translation("header.headerTitle")}
        <h6>{translation("header.authorName", { name: "Franco Gaytan" })}</h6>
      </div>
      <section className="buttons">
        <button
          className="esFlag"
          onClick={() => setTranslation.changeLanguage("es")}
        ></button>
        <button
          className="enFlag"
          onClick={() => setTranslation.changeLanguage("en")}
        ></button>
      </section>
    </div>
  );
};

export default Header;
