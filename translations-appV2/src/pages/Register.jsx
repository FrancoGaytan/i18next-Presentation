import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import "./Register.css";
import { Link, BrowserRouter, Route, Navigate } from "react-router-dom";

function goToLogin() {
  return <Navigate to="/login" />;
}

const Register = () => {
  const [translation, setTranslation] = useTranslation("global");

  return (
    <div className="app">
      <Header />
      <section className="registerContainer">
        <h1>{translation("register.registerTitle")}</h1>
        <label htmlFor="name">{translation("register.nameInput")}</label>
        <input type="text" />
        <label htmlFor="lastName">
          {translation("register.lastNameInput")}
        </label>
        <input type="text" />
        <label htmlFor="email">{translation("register.emailInput")}</label>
        <input type="text" />
        <label htmlFor="password">
          {translation("register.passwordInput")}
        </label>
        <input type="password" />
        <div className="creatingAccount">
          <p>{translation("register.alreadyHaveAccount")}</p>
          <Link to="/login">{translation("register.goToLogIn")}</Link>
        </div>
        <button>{translation("register.registerBtn")}</button>
      </section>
    </div>
  );
};

export default Register;
