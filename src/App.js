import React, { Component } from 'react';
import './App.css';

import Burger from './containers/Burger'
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
           <Burger />
        </Layout>
      </div>
    );
  }
}

export default App;
