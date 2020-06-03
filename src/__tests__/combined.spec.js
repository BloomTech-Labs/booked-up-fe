import { dashboardTests } from "../__testData__/dashboardTestData";
import { myWorksTests } from "../__testData__/myWorksTestData";
import { browseTests } from "../__testData__/browseTestData";
import { fullRenderedComponent } from "../__testData__/fullRenderedComponent";
import {
  renderFullComponent,
  testVisibility,
  testVisibleEvent
} from "../__utils__/testFunctions";

/* This is the starting file for Jest testing.  It has been re-built to prevent
duplication of code (maintainability). 

The test data resides in the __testData__ folder.  It is broken up by component
except for the test that just verifies the component rendered.  All of these are
in 1 file called fullRenderedComponent.js. 

In __utils__ folder is the actual test code.  It has been built so we can add
on tests.

Go to each __testData__ file to see how the data is used for testing
*/

let visibilityArray = [
  ...dashboardTests.visibilityTests,
  ...myWorksTests.visibilityTests,
  ...browseTests.visibilityTests
];

let visibilityEventTests = [
  ...dashboardTests.visibilityEventTests,
  ...myWorksTests.visibilityEventTests,
  ...browseTests.visibilityEventTests
];

describe("Component rendering", () => {
  fullRenderedComponent.renderComponent.map(comp =>
    it(`${comp.description}`, () => {
      renderFullComponent(comp.Component, location);
    })
  );

  visibilityArray.map(vis =>
    it(`${vis.description}`, () => {
      testVisibility(
        vis.Component,
        vis.location,
        vis.testQueryType,
        vis.queryId
      );
    })
  );
});

describe("Component functionality", () => {
  visibilityEventTests.map(vis =>
    it(`${vis.description}`, async () => {
      testVisibleEvent(
        vis.Component,
        vis.entry,
        vis.eventType,
        vis.eventAction,
        vis.componentQueryType,
        vis.testQueryType,
        vis.componentId,
        vis.queryId
      );
    })
  );
});
