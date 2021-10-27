"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_helmet_async_1 = require("react-helmet-async");
var app_routes_1 = require("./routes/app-routes");
var client_1 = require("@apollo/client");
var QUERY = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  blog posts {\n    myBlogPostsCollection{\n      total\n      items {\n        title \n        description {\n          json\n        }\n        createdAt\n        image {\n          fileName\n          size\n          description\n          url\n        }\n      }\n    }\n  }\n"], ["\n  blog posts {\n    myBlogPostsCollection{\n      total\n      items {\n        title \n        description {\n          json\n        }\n        createdAt\n        image {\n          fileName\n          size\n          description\n          url\n        }\n      }\n    }\n  }\n"])));
var App = function () {
    var _a = client_1.useQuery(QUERY), data = _a.data, loading = _a.loading;
    return (react_1["default"].createElement(react_helmet_async_1.HelmetProvider, null,
        react_1["default"].createElement(react_helmet_async_1.Helmet, null,
            react_1["default"].createElement("meta", { charSet: "utf-8" }),
            react_1["default"].createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
            react_1["default"].createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            react_1["default"].createElement("title", null, "Ayeah Godlove Akoni")),
        react_1["default"].createElement(react_1["default"].Fragment, null, loading ? (react_1["default"].createElement("h2", null, "Loading Blog posts")) : (react_1["default"].createElement(react_1["default"].Fragment, null, data.myBlogPostsCollection.items.map(function (d, index) { return (react_1["default"].createElement("p", { key: index }, d.title)); })))),
        react_1["default"].createElement(app_routes_1.AppRoutes, null)));
};
exports["default"] = App;
var templateObject_1;
