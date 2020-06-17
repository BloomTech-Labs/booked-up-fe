import UploadContentGroup from "../Author/MyWorks/ToolbarComponents/UploadContentGroup";
import { QueryTypes } from "../__utils__/testFunctions.js";

export const uploadContentGroupTests = {
  visibilityTests: [
    {
      Component: UploadContentGroup,
      location: "none",
      description: "It renders the Upload Button",
      testQueryType: QueryTypes.BY_ID,
      queryId: "upload-button"
    }
  ],

  visibilityEventTests: []
};
