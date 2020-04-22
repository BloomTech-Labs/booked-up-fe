import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

it("It loads initial react app entry point", () => {
  rtl.render(<App />);
});

it('renders "Hi, you are rendering!"', () => {
  const element = rtl.render(<App />).queryByText(/Hi, you are rendering!/i);
  expect(element).toBeInTheDocument();
});
