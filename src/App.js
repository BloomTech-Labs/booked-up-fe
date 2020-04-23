import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          
        </Switch>
          <div className="App">
            <p>Hi, you are rendering!</p>
          </div>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
