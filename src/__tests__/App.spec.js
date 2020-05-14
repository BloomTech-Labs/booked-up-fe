import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";
import '@testing-library/jest-dom/extend-expect';
it("It loads initial react app entry point", () => {
  rtl.render(<App />);
});
