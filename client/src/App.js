import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PagesDetail from './components/PagesDetail'
import PagesList from './components/PagesList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/pages' component={PagesList}/>
          <Route exact path='/pages/:id' component={PagesDetail}/>
          <Route exact path="/" render={ () => <Redirect to='/pages' /> } />
        </div>
      </Router>
    );
  }
}

export default App;
