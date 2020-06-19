import React from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(them => ({
    settings: {
        fontSize: "300px",
        marginLeft: "40%",
        marginTop: "5%"
    }
}))
    
function MainSetting(){

    const classes = useStyles();

    return (
        <div>
            <SettingsIcon className={classes.settings} />
        </div>
    )
}

export default MainSetting;

