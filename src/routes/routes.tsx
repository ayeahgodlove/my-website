import React from "react";
import HomePage from "../pages/home/home.page";
import WelcomePage from "../pages/home/welcome.page";
interface IRoutes {
  path: string;
  private: boolean;
  exact: boolean;
  component: React.FC | React.ComponentClass;
}

export const routes: IRoutes[] = [
  {
    path: "/welcome",
    private: false,
    exact: true,
    component: WelcomePage,
  },
  {
    path: "/",
    private: true,
    exact: true,
    component: HomePage,
  },
];
