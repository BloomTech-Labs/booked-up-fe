import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./Reducers/reducer";
import thunk from "redux-thunk";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils/saveSession";

require("dotenv").config();
//window.addEventListener("beforeunload", saveSession);

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
