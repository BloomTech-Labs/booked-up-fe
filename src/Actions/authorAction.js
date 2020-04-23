export const SOMETHING_AUTHOR_STUB = "SOMETHING_STUB";

export const somethingAuthorStub = passedMessage => dispatch => {
  passedMessage += "authorAction.js, somethingAuthorStub, ";
  dispatch({ type: SOMETHING_AUTHOR_STUB, payload: passedMessage });
};
