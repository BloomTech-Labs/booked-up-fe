import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#C4C4C4";
const secondary = "#3F47CC";
const tertiary = "#000080";

export default createMuiTheme({
    palette: {
        
        primary: {
          main: `${primary}`
        },
        secondary: {
          main: `${secondary}`
        },
        info: {
            main: `${tertiary}`
        }
    }
      
})