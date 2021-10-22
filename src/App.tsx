import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./routes/app-routes";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ayeah Godlove Akoni</title>
      </Helmet>
      <AppRoutes />
    </HelmetProvider>
  );
};

export default App;
