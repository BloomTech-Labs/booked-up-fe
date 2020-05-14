import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../SharedComponents/Footer.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";

import theme from "../utils/Theme";
it("It loads footer", () => {
  rtl.render(
    <ThemeProvider theme={theme}>
    <Footer />
    </ThemeProvider>);
});
