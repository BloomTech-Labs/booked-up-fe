export const SOMETHING_FAN_STUB = "SOMETHING_FAN_STUB";

export const somethingFanStub = passedMessage => dispatch => {
  passedMessage += "fanAction.js, somethingFanStub, ";
  dispatch({ type: SOMETHING_FAN_STUB, payload: passedMessage });
};
