import React from "react";
import AppShellContent from "./content.app-shell";
import AppShellFooter from "./footer.app-shell";
import AppShellHeader from "./header.app-shell";
interface AppShellProps {}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <>
      <AppShellHeader />
      <AppShellContent>{children}</AppShellContent>
      <AppShellFooter />
    </>
  );
};

export default AppShell;
