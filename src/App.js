import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }


  render() {
    return (
      <div className="App">
        <NavigationBar />
      </div>
    );
  }

}