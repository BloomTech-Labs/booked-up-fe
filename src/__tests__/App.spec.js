import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";

import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
it("It loads initial react app entry point", () => {
  rtl.render(<Provider store={store}><App /></Provider>);
});
