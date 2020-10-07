import React, { Component } from 'react';
import About from './about/About'
import Contact from './contact/Contact'
import Work from './work/Work'
import Error from './404/Error'
import WorkItem from './workItem/WorkItem'
import Header from './header/Header'
import CV from './cv/CV'
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  state = {
    isContactPage: false,
    isAboutPage: false,
    isCV: false,
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

  updateIsCV = (input) => {
    this.setState({
      isCV: input
    })
  }

  render() {
    return (
      <div>
        <Header isCV={this.state.isCV} isContactPage={this.state.isContactPage} isAboutPage={this.state.isAboutPage}/>
        <Switch>
          <Route exact path='/developer-portfolio' render={()=> (<Work updateIsCV={this.updateIsCV} updateIsAboutPage={this.updateIsAboutPage} updateIsContactPage={this.updateIsContactPage}/>)} />
          <Route exact path='/developer-portfolio/about' render={()=> ( <About updateIsCV={this.updateIsCV} updateIsAboutPage={this.updateIsAboutPage} updateIsContactPage={this.updateIsContactPage}/>)}/>
          <Route exact path='/developer-portfolio/contact' render={()=> (<Contact updateIsCV={this.updateIsCV} updateIsContactPage={this.updateIsContactPage} updateIsAboutPage={this.updateIsAboutPage}/>)} />
          <Route exact path='/developer-portfolio/cv' render={()=> (<CV  updateIsCV={this.updateIsCV} updateIsContactPage={this.updateIsContactPage} updateIsAboutPage={this.updateIsAboutPage}/>)}/>
          <Route path='/developer-portfolio/work/:workName' component={WorkItem}/>
          <Route path='/' component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
