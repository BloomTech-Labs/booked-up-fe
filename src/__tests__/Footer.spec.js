import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../SharedComponents/Footer.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import theme from "../utils/Theme";
import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
it("It loads footer", () => {
  rtl.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <Footer />
    </ThemeProvider>
    </Provider>);
});
