export const SOMETHING_ADMIN_STUB = "SOMETHING_ADMIN_STUB";

export const somethingAdminStub = passedMessage => dispatch => {
  passedMessage += "adminAction.js, somethingAdminStub, ";
  dispatch({ type: SOMETHING_ADMIN_STUB, payload: passedMessage });
};
