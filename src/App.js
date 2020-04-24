import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './SharedComponents/login';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="login" component={Login}/>    
        </Switch>
    </div>
  );
}

export default App;
