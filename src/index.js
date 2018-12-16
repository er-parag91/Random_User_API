import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
