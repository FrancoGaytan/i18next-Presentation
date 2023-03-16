import React from "react";
import { Navigate } from "react-router-dom";
import { IRoute } from "./routes";

interface RoutingComponentProps {
  //isPublic?: boolean;
  route: IRoute;
}

export default function RoutingComponent(
  props: RoutingComponentProps
): JSX.Element {
  if (props.route.isPublic) {
    return <>{props.route.element}</>;
  }

  return <Navigate to="/login" />;
}
