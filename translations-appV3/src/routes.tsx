import React from "react";
import { Link, BrowserRouter, Route, PathRouteProps } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export interface IRoute extends PathRouteProps {
  childRoutes?: IRoute;
  isPublic?: boolean;
}

const routes: { [key: string]: IRoute } = {
  login: {
    path: "/login",
    element: <Login />,
    isPublic: true,
  },
  register: {
    path: "/register",
    element: <Register />,
    isPublic: true,
  },
};

export default routes;
