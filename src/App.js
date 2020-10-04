import React from 'react';
import About from './about/About'
import Contact from './contact/Contact'
import Work from './work/Work'
import Error from './404/Error'
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/developer-portfolio' component={Work}/>
        <Route exact path='/developer-portfolio/about' component={About}/>
        <Route exact path='/developer-portfolio/contact' component={Contact}/>
        <Route path='/' component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
