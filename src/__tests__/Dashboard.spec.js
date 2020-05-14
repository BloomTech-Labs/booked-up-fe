import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../SharedComponents/Dashboard/Dashboard.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";
import { StaticRouter } from 'react-router'
import theme from "../utils/Theme";
import Browse from "../SharedComponents/Browse/Browse.jsx";

describe("Dashboard rendering", () => {
    it(" renders Dashboard.jsx", () => {
    const context = {}
  rtl.render(
    <ThemeProvider theme={theme}>
        <StaticRouter location="blah-blah-blah" context={context}>
            <Dashboard />
        </StaticRouter>
    </ThemeProvider>);
});
it("renders sidebar", () => {
    const context = {}
    const wrapper = rtl.render(
        <ThemeProvider theme={theme}>
            <StaticRouter location="blah-blah-blah" context={context}>
                <Dashboard />
            </StaticRouter>
        </ThemeProvider>);
    const element = wrapper.getByTestId("sidebar")
    expect(element).toBeVisible();
  })
  it("renders Browse label", () => {
    const context = {}
    const wrapper = rtl.render(
        <ThemeProvider theme={theme}>
            <StaticRouter location="blah-blah-blah" context={context}>
                <Dashboard />
            </StaticRouter>
        </ThemeProvider>);
    const element = wrapper.getByTestId(/sidebar-browse/i)
    expect(element).toBeVisible();
  })
  it("renders Favorites label", () => {
    const context = {}
    const wrapper = rtl.render(
        <ThemeProvider theme={theme}>
            <StaticRouter location="blah-blah-blah" context={context}>
                <Dashboard />
            </StaticRouter>
        </ThemeProvider>);
    const element = wrapper.getByTestId(/sidebar-fav/i)
    expect(element).toBeVisible();
  })
  it("renders Browse label", () => {
    const context = {}
    const wrapper = rtl.render(
        <ThemeProvider theme={theme}>
            <StaticRouter location="blah-blah-blah" context={context}>
                <Dashboard />
            </StaticRouter>
        </ThemeProvider>);
    const element = wrapper.getByTestId(/sidebar-works/i)
    expect(element).toBeVisible();
  })
})