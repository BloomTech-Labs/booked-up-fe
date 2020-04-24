
import React, { useState } from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import theme from "./utils/Theme"
import Header from "./SharedComponents/Header.jsx";
import Footer from "./SharedComponents/Footer.jsx"
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={() => <div>Dashboard</div>} isAuthenticated={isAuthenticated}/>
          <Route exact path="/login" component={() => <div>Log In</div>} />
          <Route exact path="/" component={() => <div>Home</div>} /> 
          <Route exact path="/signup" component={() => <div>Sign Up</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
