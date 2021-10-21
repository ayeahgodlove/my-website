import React from "react";

interface AppShellContentProps {}

const AppShellContent: React.FC<AppShellContentProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default AppShellContent;
