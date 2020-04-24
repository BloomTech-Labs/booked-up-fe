export const SOMETHING_AGENT_STUB = "SOMETHING_AGENT_STUB";

export const somethingAgentStub = passedMessage => dispatch => {
  passedMessage += "agentAction.js, somethingAgentStub, ";
  dispatch({ type: SOMETHING_AGENT_STUB, payload: passedMessage });
};
