import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Browse from "../SharedComponents/Browse/Browse.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import theme from "../utils/Theme";
import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
describe("Browse rendering", () => {
    it("renders Browse.jsx", () => {
    
        rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
      })
    it("renders search bar", () => {
    
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByText(/Search/i)
        expect(element).toBeVisible();
      })
      it("renders filter", () => {
      
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByText(/All/i)
        expect(element).toBeVisible();
      })
      it("renders button", () => {
      
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByText(/Go/i)
        expect(element).toBeVisible();
      })
      it("renders Featured Title", () => {
      
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByText(/Featured/i)
        expect(element).toBeVisible();
      })
      it("renders New Releases Title", () => {
      
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByText(/New/i)
        expect(element).toBeVisible();
      })
      it("renders New Releases Carousel arrow", () => {
      
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByTestId(/new-left/i)
        expect(element).toBeVisible();
      })
      it("renders Most Popular Title", () => {
      
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByText(/Popular/i)
        expect(element).toBeVisible();
      })
      it("renders Most Popular Carousel right", () => {
      
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        
        const element = wrapper.getByTestId(/pop-right/i)
        expect(element).toBeVisible();
      })
})

describe("Browse functionality", () => {
    it("brings up searches on search button", () => {
    
        const wrapper = rtl.render(
          <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Browse />
          </ThemeProvider>
          </Provider>);
        const button = wrapper.getByText(/Go/i)
        
        
        rtl.act(() => {
            rtl.fireEvent.click(button);
        });
        const result = wrapper.getByText(/Search Results/i);
        expect(result).toBeVisible();
      })
})