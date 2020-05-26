import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../SharedComponents/Header.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";
import { StaticRouter } from 'react-router'
import theme from "../utils/Theme";
import { Provider } from "react-redux";
import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
it("It loads Header", () => {
    const context = {}
  rtl.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <StaticRouter location="blah-blah-blah" context={context}>
            <Header />
        </StaticRouter>
    </ThemeProvider>
    </Provider>);
});
