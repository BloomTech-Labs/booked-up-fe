export const SOMETHING_AUTHENTICATION_STUB = "SOMETHING_STUB";

export const somethingAuthenticationStub = passedMessage => dispatch => {
  passedMessage += "authenticationAction.js, somethingAuthenticationStub, ";
  dispatch({ type: SOMETHING_AUTHENTICATION_STUB, payload: passedMessage });
};
