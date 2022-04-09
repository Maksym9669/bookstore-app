import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./redux/locationSlice";
import counterReducer from "./redux/counterSlice";
import apiReducer from "./redux/apiSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    counter: counterReducer,
    api: apiReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
