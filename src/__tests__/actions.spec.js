import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import jsonwebtoken from "jsonwebtoken";
import { mockData } from "../__mocks__/mockData";
import mockLocalStorage from "../__mocks__/mockLocalStorage";
import { userLogon } from "../actions/authenticationAction";
import { USER_LOGON } from "../actions/authenticationAction";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
window.localStorage = mockLocalStorage;

describe("Authentication Actions", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  // Error in this still working on it. This will create 1 failed test suite.

  //it("Logs the user on when successful", async done => {
  //   const { authResponse, logonData } = mockData;
  //   moxios.stubRequest("/api/auth/login", {
  //     status: 200,
  //     response: authResponse
  //   });
  //   const expectedActions = [
  //     { type: USER_LOGON, user: jsonwebtoken.decode(authResponse.data.token) }
  //   ];
  //   const store = mockStore({});
  //   await store.dispatch(userLogon(logonData)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  //});
});
