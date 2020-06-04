import Browse from "../SharedComponents/Browse/Browse";
import MyWorks from "../Author/MyWorks/MyWorks";
import Dashboard from "../SharedComponents/Dashboard/Dashboard";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header";
import Profile from "../Author/Profile/Profile.jsx";
import UploadModal from "../Author/MyWorks/UploadModal.jsx";

//***** TESTING FILE: All Components *****/

/***** Component Render Test *****
The visibility test just tests whether an element is present in the component,
such as a button, grid, text or data-testid, etc.  

** Variables **
Component (React-Component):  The component the element is in, it is used for Jest rendering

location (string):            This is for the StaticRouter location component.  Currrently, it is 
                              essentially being ignored
                      
description (string):         The test functions in __utils__ does not have describe/it blocks, 
                              __tests__/combined.spec.js uses description for the it block when
                              it maps this data array
*/

export const fullRenderedComponent = {
  renderComponent: [
    {
      Component: MyWorks,
      location: "none",
      description: "Renders MyWorks"
    },
    {
      Component: Browse,
      location: "none",
      description: "Renders Browse"
    },
    {
      Component: Dashboard,
      location: "none",
      description: "Renders Dashboard"
    },
    {
      Component: Footer,
      location: "none",
      description: "Renders Footer"
    },
    {
      Component: Header,
      location: "none",
      description: "Renders Header"
    },
    {
      Component: Profile,
      location: "none",
      description: "Renders Profile"
    },
    {
      Component: UploadModal,
      location: "none",
      description: "Renders UploadModal"
    }
  ]
};
