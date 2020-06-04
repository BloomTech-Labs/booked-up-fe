import SearchGroup from "../Author/MyWorks/ToolbarComponents/SearchGroup";
import { QueryTypes } from "../__utils__/testFunctions.js";

export const searchGroupTests = {
  visibilityTests: [
    {
      Component: SearchGroup,
      location: "none",
      description: "It renders the Search Group Component",
      testQueryType: QueryTypes.BY_ID,
      queryId: "work-search"
    }
  ],

  visibilityEventTests: []
};
