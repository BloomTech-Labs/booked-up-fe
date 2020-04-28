
import React, { useState } from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import theme from "./utils/Theme"



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={() => <div>Dashboard</div>} isAuthenticated={isAuthenticated}/>
          <Route exact path="/login" component={() => <div>Sign In</div>} />
          <Route exact path="/" component={() => <div>Home</div>} /> 
          <Route exact path="/signup" component={() => <div>Sign Up</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
