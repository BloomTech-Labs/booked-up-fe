import SortFilterGroup from "../Author/MyWorks/ToolbarComponents/SortFilterGroup";
import { QueryTypes } from "../__utils__/testFunctions.js";

export const sortFilterGroupTests = {
  visibilityTests: [
    {
      Component: SortFilterGroup,
      location: "none",
      description: "It renders the Sort Button",
      testQueryType: QueryTypes.BY_ID,
      queryId: "sort-button"
    },
    {
      Component: SortFilterGroup,
      location: "none",
      description: "It renders the Filter Button",
      testQueryType: QueryTypes.BY_ID,
      queryId: "filt-button"
    }
  ],

  visibilityEventTests: []
};
