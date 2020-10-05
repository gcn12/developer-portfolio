import React, { Component } from 'react';
import About from './about/About'
import Contact from './contact/Contact'
import Work from './work/Work'
import Error from './404/Error'
import Header from './header/Header'
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  state = {
    isContactPage: false,
    isAboutPage: false,
  }

  updateIsContactPage = (input) => {
    this.setState({
      isContactPage: input
    })
  }

  updateIsAboutPage = (input) => {
    this.setState({
      isAboutPage: input
    })
  }

  render() {
    return (
      <div>
        <Header isContactPage={this.state.isContactPage} isAboutPage={this.state.isAboutPage}/>
        <Switch>
          <Route exact path='/developer-portfolio' render={()=> (<Work updateIsAboutPage={this.updateIsAboutPage} updateIsContactPage={this.updateIsContactPage}/>)} />
          <Route exact path='/developer-portfolio/about' render={()=> ( <About updateIsAboutPage={this.updateIsAboutPage} updateIsContactPage={this.updateIsContactPage}/>)}/>
          <Route exact path='/developer-portfolio/contact' render={()=> (<Contact updateIsContactPage={this.updateIsContactPage} updateIsAboutPage={this.updateIsAboutPage}/>)} />
          <Route path='/' component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
