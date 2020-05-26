import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import { MyWorks } from "../Author/MyWorks/MyWorks";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../utils/Theme";

describe("MyWorks rendering", () => {
  it("Renders MyWorks.jsx", () => {
    rtl.render(
      <ThemeProvider theme={theme}>
        <MyWorks />
      </ThemeProvider>
    );
  });
});
