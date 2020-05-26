import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../SharedComponents/Dashboard/Dashboard.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";
import { StaticRouter } from 'react-router'
import { MemoryRouter } from 'react-router'
import theme from "../utils/Theme";
import Browse from "../SharedComponents/Browse/Browse.jsx";
import { Provider } from "react-redux";
import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";



const store = createStore(reducer, applyMiddleware(thunk));
describe("Dashboard rendering", () => {
    it(" renders Dashboard.jsx", () => {
    const context = {}
  rtl.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <StaticRouter location="blah-blah-blah" context={context}>
            <Dashboard />
        </StaticRouter>
    </ThemeProvider>
    </Provider>);
});
it("renders sidebar", () => {
    const context = {}
    const wrapper = rtl.render(
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StaticRouter location="blah-blah-blah" context={context}>
                <Dashboard />
            </StaticRouter>
        </ThemeProvider>
        </Provider>);
    const element = wrapper.getByTestId("sidebar")
    expect(element).toBeVisible();
  })
  it("renders Browse label", () => {
    const context = {}
    const wrapper = rtl.render(
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StaticRouter location="blah-blah-blah" context={context}>
                <Dashboard />
            </StaticRouter>
        </ThemeProvider>
        </Provider>);
    const element = wrapper.getByTestId(/sidebar-browse/i)
    expect(element).toBeVisible();
  })
  it("renders My Works label", () => {
    const context = {}
    const wrapper = rtl.render(
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StaticRouter location="blah-blah-blah" context={context}>
                <Dashboard />
            </StaticRouter>
        </ThemeProvider>
        </Provider>);
    const element = wrapper.getByTestId("sidebar-works")
    expect(element).toBeVisible();
  })
})

describe("Dashboard functionality", () => {
    
    it("renders Browse on click", async () => {
        const context = {}

        const wrapper = rtl.render(
            <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/dashboard/profile"]} context={context}>
                <Dashboard />
            </MemoryRouter>
          </ThemeProvider>
          </Provider>);
        rtl.act(() => {
            const link = wrapper.getByTestId("sidebar-browse")
            link.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        })
        const browsel = wrapper.getByText(/Featured/i)
        expect(browsel).toBeVisible()
      })
      it("renders Profile on click", async () => {
        const context = {}

        const wrapper = rtl.render(
            <Provider store={store}>
          <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={["/dashboard"]} context={context}>
                <Dashboard />
            </MemoryRouter>
          </ThemeProvider>
          </Provider>);
        rtl.act(() => {
            const link = wrapper.getByTestId("sidebar-profile")
            link.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        })
        const profile = wrapper.getByText(/First Name/i)
        expect(profile).toBeVisible()
      })
      it("renders My Works on click", async () => {
        const context = {}

        const wrapper = rtl.render(
            <Provider store={store}>
          <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={["/dashboard"]} context={context}>
                <Dashboard />
            </MemoryRouter>
          </ThemeProvider>
          </Provider>);
        rtl.act(() => {
            const link = wrapper.getByTestId("sidebar-works")
            link.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        })
        const works = wrapper.getByTestId("work-search")
        expect(works).toBeVisible()
      })
})