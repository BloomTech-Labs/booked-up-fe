import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../Author/Profile/Profile.jsx";
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from "@material-ui/styles";
import { StaticRouter } from 'react-router'
import theme from "../utils/Theme";
import Browse from "../SharedComponents/Browse/Browse.jsx";
import { Provider } from "react-redux";
import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";



const store = createStore(reducer, applyMiddleware(thunk));
describe("Profile rendering", () => {
    it(" renders Profile.jsx", () => {
    const context = {}
  rtl.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <StaticRouter location="blah-blah-blah" context={context}>
            <Profile />
        </StaticRouter>
    </ThemeProvider>
    </Provider>);
});
})