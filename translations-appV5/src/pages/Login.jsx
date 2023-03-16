import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [translation, setTranslation] = useTranslation("global");

  return (
    <div className="app">
      <Header />
      <section className="loginContainer">
        <h1>{translation("login.loginTitle")}</h1>
        <label htmlFor="email">{translation("login.emailInput")}</label>
        <input type="text" />
        <label htmlFor="password">{translation("login.passwordInput")}</label>
        <input type="password" />
        <div className="creatingAccount">
          <p>{translation("login.accountQuestion")}</p>
          <Link to="/register">{translation("login.goToRegister")}</Link>
        </div>
        <button>{translation("login.enterBtn")}</button>
      </section>
    </div>
  );
};

export default Login;
