import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: RouteProps) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Redirect to="/welcome" />;
  }

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
