import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './frontend/Admin';
import Home from './frontend/Home';
import Dashboard from './frontend/Dashboard';
import Event from './frontend/EventInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/admin" component={Admin} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/event" component={Event} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;