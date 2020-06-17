import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import theme from "./utils/Theme";
import Header from "./SharedComponents/Header.jsx";
import Footer from "./SharedComponents/Footer/Footer.jsx";
import Dashboard from "./SharedComponents/Dashboard/Dashboard.jsx";
import Home from "./LandingPage/Home";
import LoginForm from "./SharedComponents/LoginForm";
import SignUpForm from "./SharedComponents/SignUpForm";
import IndexRoute from "./utils/IndexRoute.jsx";
import Settings from "./SharedComponents/AccountSettings/Settings.jsx";

import MessageView from "./SharedComponents/Messages/MessageView.jsx"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Roue exact path="/signup" component={SignUpForm} />
          <PrivateRoute 
            path="/settings" 
            component={Settings} />
          <PrivateRoute path="/messages" component={MessageView} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
