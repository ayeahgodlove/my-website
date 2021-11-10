import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider as AuthProvider } from "@auth0/auth0-react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_CONTENTFUL_URI,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONTENT_DELIVERY_API_KEY}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider
      domain={process.env.REACT_APP_DOMAIN!}
      clientId={process.env.REACT_APP_CLIENT_ID!}
      redirectUri={`${window.location.origin}/callback`}
      scope="read:current_user"
    >
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
