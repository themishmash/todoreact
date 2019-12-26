import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Todo from './Todo';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={Todo} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
