import React from "react";

interface IRoutes {
  path: string;
  private: boolean;
  exact: boolean;
  component: React.FC | React.ComponentClass;
  breadcrumb?: React.ReactNode | string;
  showDashboardName?: boolean;
}

export const routes: IRoutes[] = [];
