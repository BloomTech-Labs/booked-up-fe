import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import MyWorks from "../Author/MyWorks/MyWorks";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../utils/Theme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
describe("MyWorks rendering", () => {
  it("Renders MyWorks.jsx", () => {
    const context = {};
    rtl.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={["/my-works"]} context={context}>
            <MyWorks />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
  });

  describe("MyWorks Toolbar Rendering", () => {
    it("Renders Toolbar", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/toolbar/i);
      expect(element).toBeVisible();
    });
    it("Renders Upload Button", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/upload-button/i);
      expect(element).toBeVisible();
    });
    it("Upload Button Click", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      rtl.act(() => {
        const link = wrapper.getByTestId("upload-button");
        link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      const upload = wrapper.getByTestId(/upload-modal/i);
      expect(upload).toBeVisible();
    });
  });

  describe("Renders Toggle Button Group", () => {
    const context = {};
    it("Renders Toggle Button Group", () => {
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/toggle-button-group/i);
      expect(element).toBeVisible();
    });
    it("Renders Grid Toggle Button", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/grid-button/i);
      expect(element).toBeVisible();
    });
    it("Renders Row Toggle Button", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/row-button/i);
      expect(element).toBeVisible();
    });
    it("Renders Column Toggle Button", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/column-button/i);
      expect(element).toBeVisible();
    });
    it("Row Icon Button Click", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter
              initialEntries={["/dashboard/my-works"]}
              context={context}
            >
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      rtl.act(() => {
        const link = wrapper.getByTestId("row-button");
        link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      const component = wrapper.getByTestId(/row-display/i);
      expect(component).toBeVisible();
    });
    it("Column Icon Button Click", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter
              initialEntries={["/dashboard/my-work"]}
              context={context}
            >
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      rtl.act(() => {
        const link = wrapper.getByTestId("column-button");
        link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      const component = wrapper.getByTestId(/column-display/i);
      expect(component).toBeVisible();
    });
  });

  describe("Renders Sort/Filter Button Group", () => {
    it("Renders Sort/Filter Button Group", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/sort-filter-button-group/i);
      expect(element).toBeVisible();
    });
    it("Renders Sort Icon Button", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/sort-button/i);
      expect(element).toBeVisible();
    });
    it("Renders Filter Icon Button", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      const element = wrapper.getByTestId(/filt-button/i);
      expect(element).toBeVisible();
    });

    // Note: These will fail, the dialog will not render until a re-render happens
    // Jest cannot detect these.  Wrapping in a div and they work.
    it("Sort Icon Button Click", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      rtl.act(() => {
        const link = wrapper.getByTestId("sort-button");
        link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      const dialog = wrapper.getByTestId(/sort-dialog/i);
      expect(dialog).toBeVisible();
    });
    it("Filter Icon Button Click", () => {
      const context = {};
      const wrapper = rtl.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={["/my-works"]} context={context}>
              <MyWorks />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );
      rtl.act(() => {
        const link = wrapper.getByTestId("filt-button");
        link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      const dialog = wrapper.getByTestId(/filter-dialog/i);
      expect(dialog).toBeVisible();
    });
  });
});
