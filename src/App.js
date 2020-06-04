import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import theme from "./utils/Theme";
import Header from "./SharedComponents/Header.jsx";
import Footer from "./SharedComponents/Footer.jsx";
import Dashboard from "./SharedComponents/Dashboard/Dashboard.jsx";
import Home from "./LandingPage/Home";
import LoginForm from "./SharedComponents/LoginForm";
import SignUpForm from "./SharedComponents/SignUpForm";
import IndexRoute from "./utils/IndexRoute.jsx";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
          />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUpForm} />
          <IndexRoute  exact path="/index.html"  />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
