import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ayeah Godlove Akoni</title>
      </Helmet>
      <div className="App">
        <h1>My Personal Website</h1>
      </div>
    </HelmetProvider>
  );
};

export default App;
