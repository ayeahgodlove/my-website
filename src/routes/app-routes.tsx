import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/common/protected-route/protected.route";
import AppShell from "../layout/app-shell";
import CallbackPage from "../pages/callback/callback.page";
import { routes } from "./routes";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* Auth0 calback url */}
        <Route exact path="/callback" component={CallbackPage} />

        {/* app routes */}
        {routes.map((route, index) => {
          if (route.private) {
            return (
              <PrivateRoute key={index} exact={route.exact} path={route.path}>
                <AppShell>
                  <route.component />
                </AppShell>
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
    </Router>
  );
};
