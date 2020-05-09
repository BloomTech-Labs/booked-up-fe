import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../SharedComponents/Header.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";
import { StaticRouter } from 'react-router'
import theme from "../utils/Theme";
it("It loads Header", () => {
    const context = {}
  rtl.render(
    <ThemeProvider theme={theme}>
        <StaticRouter location="blah-blah-blah" context={context}>
            <Header />
        </StaticRouter>
    </ThemeProvider>);
});
