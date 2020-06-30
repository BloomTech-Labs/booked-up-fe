import React, { useState, useEffect } from 'react';
//material ui imports
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MessageContent from "./MessageContent.jsx";
import MessageSend from './MessageSend.jsx';
//redux and action imports
import { getMessages } from "../../actions/authorAction.js";
import { connect } from "react-redux";
import { removeSelWork } from "../../actions/userAction.js";
import { getUser } from "../../actions/agentAction.js";

//component styles
const drawerWidth = 165;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      minHeight: '58em'
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      marginTop: "5em",
      backgroundColor: theme.palette.secondary.main
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      marginTop: "5.1em"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
        color: "white"
    }
  }));
  
  function MessageView(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [availableMessages, setAvailableMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState({})
    const [reply, setReply] = useState({})
    //opens drawer for mobile view of messages
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const handleOpen = (message) => {
        console.log(message)
        setReply({})
        props.removeSelWork()
        setCurrentMessage(message)
        props.getUser(message.sender_id)
    }

    const handleReplyMessage = (message) => {
      setReply({
        subject: `Re: ${message.subject}`,
        sender_id: props.user.id,
        user_id: props.selectedUser.id,
        recipient: props.selectedUser.display_name,
        linking_id: message.id
      })
    };

    useEffect(() => {
      props.getMessages(props.user.id)
        if(props.messages) (
            setAvailableMessages(props.messages)
        )
        else (
            setAvailableMessages(["There are no current messages"])
        )
    }, [props.messages])

    //the different message subjects in the drawer. Displays differently when in tablet or mobile view.
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {availableMessages.map((text, index) => (
            <ListItem button key={index} onClick={() => handleOpen(text)}>
              <ListItemText primary={text.subject} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <div className={classes.root}>
        {/* Mobile drawer for opening available messages */}
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              Messages
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="messages sent/received">
          {/* Desktop messages */}
          <Hidden mdUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          {/* Mobile messages */}
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          
              {props.currentWork.author_content_id ? (<MessageSend currentWork={props.currentWork}/>
              ) : reply.sender_id ? (<MessageSend currentWork={reply} type={"reply"}/>) : (<MessageContent message = {currentMessage} handleReplyMessage={handleReplyMessage} user={props.selectedUser}/>)}
        </main>
      </div>
    );
  }
  

  const mapStateToProps = state => {
    return {
      user: state.user,
      isLogged: state.isLogged,
      currentWork: state.currentWork,
      messages: state.messages,
      selectedUser: state.selectedUser
    };
  };
  
  export default connect(mapStateToProps, { getMessages, removeSelWork, getUser })(MessageView);
  