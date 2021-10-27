"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var store_1 = require("./redux/store");
var auth0_react_1 = require("@auth0/auth0-react");
require("bootstrap/scss/bootstrap.scss");
var react_2 = require("redux-persist/integration/react");
var client_1 = require("@apollo/client");
var client = new client_1.ApolloClient({
    cache: new client_1.InMemoryCache(),
    uri: process.env.REACT_APP_CONTENTFUL_URI,
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_CONTENT_DELIVERY_API_KEY
    }
});
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(auth0_react_1.Auth0Provider, { domain: process.env.REACT_APP_DOMAIN, clientId: process.env.REACT_APP_CLIENT_ID, 
            // audience={process.env.REACT_APP_AUDIENCE}
            redirectUri: window.location.origin + "/callback", scope: "read:current_user" },
            react_1["default"].createElement(react_2.PersistGate, { persistor: store_1.persistor },
                react_1["default"].createElement(client_1.ApolloProvider, { client: client },
                    react_1["default"].createElement(App_1["default"], null)))))), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
