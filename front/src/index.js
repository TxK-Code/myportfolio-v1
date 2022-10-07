import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import store from "./redux/store";

import changeModel from "./redux/articles/modeSlice";

const Store = configureStore({
  reducer: {
    modeSelected: changeModel,
  },
});

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
