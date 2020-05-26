import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import UploadModal from "../Author/MyWorks/UploadModal.jsx"
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
describe("Upload rendering", () => {
    it(" renders UploadModal.jsx", () => {
    const context = {}
  rtl.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <StaticRouter location="blah-blah-blah" context={context}>
            <UploadModal />
        </StaticRouter>
    </ThemeProvider>
    </Provider>);
});
})