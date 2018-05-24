import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PagesDetail from './components/PagesDetail'
import PagesList from './components/PagesList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const pages = [
  {
    id: 1,
    title: 'Handbag',
    price: 1450,
    description: 'Nearly new handbag',
    email: 'mike@gmail.com',
    phone: '079775664773'
  },

  {
    id: 2,
    title: 'Shoes',
    price: 200,
    description: 'Nearly new shoes',
    email: 'mikey@gmail.com',
    phone: '079775667574'
  }
]

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
