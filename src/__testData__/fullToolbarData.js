import FullToolbar from "../Author/MyWorks/ToolbarComponents/FullToolbar";
import { QueryTypes } from "../__utils__/testFunctions.js";

export const fullToolbarTests = {
  visibilityTests: [
    {
      Component: FullToolbar,
      location: "none",
      description: "It renders the Toolbar Component",
      testQueryType: QueryTypes.BY_ID,
      queryId: "toolbar"
    }
  ],

  visibilityEventTests: []
};
