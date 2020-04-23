import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={() => <div>Log In</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
          <PrivateRoute path="/dashboard" component={() => <div>Dashboard</div>} />
          <Route exact path="/signup" component={() => <div>Sign Up</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
