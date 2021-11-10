import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/common/protected-route/protected.route";
import CallbackPage from "../pages/callback/callback.page";
import { routes } from "./routes";

export const AppRoutes = () => {
  return (
    <Switch>
      {/* Auth0 calback url */}
      <Route exact path="/callback" component={CallbackPage} />

      {/* app routes */}
      {routes.map((route, index) => {
        if (route.private) {
          return (
            <PrivateRoute key={index} exact={route.exact} path={route.path}>
              <route.component />
            </PrivateRoute>
          );
        }

        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};
