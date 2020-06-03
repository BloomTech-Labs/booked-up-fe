import React from "react";
import * as rtl from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { StaticRouter } from "react-router";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import theme from "../utils/Theme";
import reducer from "../Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

// Query Types
export const QueryTypes = {
  BY_TEXT: "BY_TEXT",
  BY_ID: "BY_ID"
};

// Event Types
export const EventTypes = {
  MOUSE_EVENT: "MOUSE_EVENT"
};

// Event Actions
export const EventActions = {
  MOUSE_LEFT_CLICK: "click"
};

export const renderFullComponent = (Component, location) => {
  renderStaticRouterComponent(Component, location);
};

export const testVisibility = (Component, location, testQueryType, queryId) => {
  const wrapper = renderStaticRouterComponent(Component, location);
  checkVisibility(wrapper, testQueryType, queryId);
};

export const testVisibleEvent = (
  Component,
  entry,
  eventType,
  eventAct,
  componentQueryType,
  testQueryType,
  componentId,
  queryId
) => {
  const wrapper = renderMemoryRouterComponent(Component, entry);
  eventAction(wrapper, eventType, eventAct, componentQueryType, componentId);
  checkVisibility(wrapper, testQueryType, queryId);
};

const renderStaticRouterComponent = (Component, location) => {
  const context = {};
  return rtl.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StaticRouter location={location} context={context}>
          <Component />
        </StaticRouter>
      </ThemeProvider>
    </Provider>
  );
};

const renderMemoryRouterComponent = (Component, entry) => {
  const context = {};
  return rtl.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[entry]} context={context}>
          <Component />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

const checkVisibility = (wrapper, testQueryType, queryId) => {
  switch (testQueryType) {
    case QueryTypes.BY_ID:
      expect(wrapper.getByTestId(new RegExp(queryId, "i"))).toBeVisible();
      break;
    case QueryTypes.BY_TEXT:
      expect(wrapper.getByText(new RegExp(queryId, "i"))).toBeVisible();
      break;
    default:
      break;
  }
};

const eventAction = (
  wrapper,
  eventType,
  eventAction,
  componentQueryType,
  componentId
) => {
  return rtl.act(() => {
    switch (eventType) {
      case EventTypes.MOUSE_EVENT:
        switch (componentQueryType) {
          case QueryTypes.BY_ID:
            wrapper
              .getByTestId(new RegExp(componentId, "i"))
              .dispatchEvent(new MouseEvent(eventAction, { bubbles: true }));
            break;

          case QueryTypes.BY_TEXT:
            wrapper
              .getByText(new RegExp(componentId, "i"))
              .dispatchEvent(new MouseEvent(eventAction, { bubbles: true }));
            break;

          default:
            break;
        }
        break;
      default:
        break;
    }
  });
};
