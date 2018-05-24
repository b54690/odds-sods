import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PagesDetail from './components/PagesDetail'
import PagesList from './components/PagesList'

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
      <div>
        <PagesList/>
        <PagesDetail/>
      </div>
    );
  }
}

export default App;
