import Browse from "../SharedComponents/Browse/Browse";
import {
  QueryTypes,
  EventTypes,
  EventActions
} from "../__utils__/testFunctions.js";

//***** TESTING FILE: Browse *****/

/***** VisibililtyTests *****
The visibility test just tests whether an element is present in the component,
such as a button, grid, text or data-testid, etc.  

** Variables **
Component (React-Component):  The component the element is in, it is used for Jest rendering

location (string):            This is for the StaticRouter location component.  Currrently, it is 
                              essentially being ignored

description (string):         The test functions in __utils__ does not have describe/it blocks, 
                              __tests__/combined.spec.js uses description for the it block when
                              it maps this data array

testQueryType (QueryTypes):   The component the element resides in needs to be grabbed, 
                              the current options are QueryTypes.BY_ID or QueryTypes.BY_TEXT. 
                              The enums are in __utils__/testFunctions.js 

queryId (string):             This is the string that will be used to capture the element you want
                              to check if it is rendered in the component.  
*/

/***** VisibililtyEventTests *****
This test fires an event then checks to see if an element renders based off the
fired event.  

** Variables **
Component (React-Component):      The component the element that needs to be fired is in.

entry (string):                   This is for the MemoryRouters intialEntry string.

eventType (EventType):            The type of event that needs to be fired (only 
                                  EventTypes.MOUSE_EVENT exists right now).  See
                                  __utils/testFunctions.js for enum types

eventAction (EventActions):       This is type action of the event you want to fire
                                  currently the only option is EventActions.MOUSE_LEFT_CLICK

componentQueryType (QueryTypes):  This is the component/element that you want to fire an
                                  event on. Current options are QueryTypes.BY_ID or 
                                  QueryTypes.BY_TEXT. The enums are in 
                                  __utils__/testFunctions.js 

testQueryType (QueryTypes):       This is the element that you want to verify has 
                                  rendered based on the fired event, the current 
                                  options are QueryTypes.BY_ID or QueryTypes.BY_TEXT. 
                                  The enums are in __utils__/testFunctions.js

componentId (string):             The id of the component/element that needs to be fired, 
                                  the current options are QueryTypes.BY_ID or 
                                  QueryTypes.BY_TEXT. The enums are in 
                                  __utils__/testFunctions.js 

queryId (string):                 This is the string that will be used to capture the element you want
                                  to verify it rendered after the event is fired.  
*/

export const browseTests = {
  visibilityTests: [
    {
      Component: Browse,
      location: "none",
      description: "It renders the Search Bar",
      testQueryType: QueryTypes.BY_TEXT,
      queryId: "Search"
    },
    {
      Component: Browse,
      location: "none",
      description: "It renders Filter",
      testQueryType: QueryTypes.BY_TEXT,
      queryId: "All"
    },
    {
      Component: Browse,
      location: "none",
      description: "It renders Button",
      testQueryType: QueryTypes.BY_TEXT,
      queryId: "Go"
    },
    {
      Component: Browse,
      location: "none",
      description: "It renders Featured Title",
      testQueryType: QueryTypes.BY_TEXT,
      queryId: "Featured"
    },
    {
      Component: Browse,
      location: "none",
      description: "It renders Releases Title",
      testQueryType: QueryTypes.BY_TEXT,
      queryId: "New"
    },
    {
      Component: Browse,
      location: "none",
      description: "It renders New Releases Carousel arrow",
      testQueryType: QueryTypes.BY_ID,
      queryId: "new-left"
    },
    {
      Component: Browse,
      location: "none",
      description: "It renders Most Popular Title",
      testQueryType: QueryTypes.BY_TEXT,
      queryId: "Popular"
    },
    {
      Component: Browse,
      location: "none",
      description: "It rendersMost Popular Carousel right",
      testQueryType: QueryTypes.BY_ID,
      queryId: "pop-right"
    }
  ],

  visibilityEventTests: []
};
