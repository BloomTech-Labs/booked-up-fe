// Test imports to test stubs
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
  props.somethingAdminStub("index.js");
  props.somethingAgentStub("index.js");
  props.somethingAuthenticationStub("index.js");
  props.somethingAuthorStub("index.js");
  props.somethingFanStub("index.js");
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
