import ContentViewGroup from "../Author/MyWorks/ToolbarComponents/ContentViewGroup";
import { QueryTypes } from "../__utils__/testFunctions.js";

export const contentViewGroupTests = {
  visibilityTests: [
    {
      Component: ContentViewGroup,
      location: "none",
      description: "It renders Toggle Button Group",
      testQueryType: QueryTypes.BY_ID,
      queryId: "toggle-button-group"
    },
    {
      Component: ContentViewGroup,
      location: "none",
      description: "It renders Toggle Button Grid",
      testQueryType: QueryTypes.BY_ID,
      queryId: "grid-button"
    },
    {
      Component: ContentViewGroup,
      location: "none",
      description: "It renders Toggle Button Row",
      testQueryType: QueryTypes.BY_ID,
      queryId: "row-button"
    },
    {
      Component: ContentViewGroup,
      location: "none",
      description: "It renders Toggle Button Column",
      testQueryType: QueryTypes.BY_ID,
      queryId: "column-button"
    }
  ],

  visibilityEventTests: []
};
