import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { Auth0Provider as AuthProvider } from "@auth0/auth0-react";
import "bootstrap/scss/bootstrap.scss";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider
        domain={process.env.REACT_APP_DOMAIN!}
        clientId={process.env.REACT_APP_CLIENT_ID!}
        // audience={process.env.REACT_APP_AUDIENCE}
        redirectUri={`${window.location.origin}/callback`}
        scope="read:current_user"
      >
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
