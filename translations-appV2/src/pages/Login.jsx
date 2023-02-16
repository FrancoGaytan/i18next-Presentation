import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import "./Login.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

const Login = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="app">
      <Header />
      <section className="loginContainer">
        <h1>{t("login.loginTitle")}</h1>
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <div className="creatingAccount">
          <p>No tenes cuenta? </p>
          <Link to="/register">Registrate</Link>
        </div>
        <button>Ingresar</button>
      </section>
    </div>
  );
};

export default Login;
