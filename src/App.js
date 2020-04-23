import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route path="/signup" component={() => <div>Sign Up</div>} />
          <Route path="/login" component={() => <div>Log In</div>} />
        </Switch>
  
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
