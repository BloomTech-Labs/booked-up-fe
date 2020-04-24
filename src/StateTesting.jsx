// Test imports to test stubs
import React from "react";
import { connect } from "react-redux"; // This can be removed it is stub testing
import { somethingAdminStub } from "./Actions/adminAction";
import { somethingAgentStub } from "./Actions/agentAction";
import { somethingAuthenticationStub } from "./Actions/authenticationAction";
import { somethingAuthorStub } from "./Actions/authorAction";
import { somethingFanStub } from "./Actions/fanAction";

// END Test imports for testing stubs

// This is stub testing code for the actions and reducers, the format to verify working is:
// All below this line can be deleted once testing is done:
// Output is: <BaseCallingFile>, <ActionFile, <StubActionFunction>, <ReducerFile>, <Stub Reducer>
export const StateTest = props => {
  props.somethingAdminStub("index.js ");
  console.log("StateTesting: ** Left somethingAdminStub");
  props.somethingAgentStub("index.js ");
  console.log("StateTesting: ** Left somethingAgentStub");
  props.somethingAuthenticationStub("index.js ");
  console.log("StateTesting: ** Left somethingAuthenticationStub");
  props.somethingAuthorStub("index.js ");
  console.log("StateTesting: ** Left somethingAuthorStub");
  props.somethingFanStub("index.js ");
  console.log("StateTesting: ** Left somethingFanStub");

  return <div>Inside State Testing</div>;
};

const mapStateToProps = state => ({
  username: state.username
});

export default connect(mapStateToProps, {
  somethingAdminStub,
  somethingAgentStub,
  somethingAuthenticationStub,
  somethingAuthorStub,
  somethingFanStub
})(StateTest);
// END of StateTesting Code
