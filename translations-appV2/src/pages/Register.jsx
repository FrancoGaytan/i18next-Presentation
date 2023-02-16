import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import "./Register.css";
import { Link, BrowserRouter, Route, Navigate } from "react-router-dom";

function goToLogin() {
  return <Navigate to="/login" />;
}

const Register = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="app">
      <Header />
      <section className="registerContainer">
        <h1>{t("register.registerTitle")}</h1>
        <label htmlFor="name">Nombre</label>
        <input type="text" />
        <label htmlFor="secondName">Apellido</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <div className="creatingAccount">
          <p>Ya tenes cuenta? </p>
          <Link to="/login">Logearme</Link>
        </div>
        <button>Registrarse</button>
      </section>
    </div>
  );
};

export default Register;
