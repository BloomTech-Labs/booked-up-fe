import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import theme from "./utils/Theme";
import Header from "./SharedComponents/Header.jsx";
import Footer from "./SharedComponents/Footer.jsx";
import Dashboard from "./SharedComponents/Dashboard/Dashboard.jsx";
import SignIn from "./SharedComponents/loginForm";
import SignUpForm from "./SharedComponents/SignUpForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/signup" component={SignUpForm} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
