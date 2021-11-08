import React, {Component} from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './Tabs/Admin';
import Home from './Tabs/Home';
import Dashboard from './Tabs/Dashboard';

class App extends Component {

  
  render(){
   return (
    <BrowserRouter>
    <div>
      <Navigation />
        <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/admin" component={Admin}/>
         <Route path="/dashboard" component={Dashboard}/>
       </Switch>
    </div> 
  </BrowserRouter>
   );
  }
}

export default App;