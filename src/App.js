import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavigationBar from './components/NavigationBar';

function App() {
  return (
      <div className="App">
          <NavigationBar />
      </div>

  );
}

export default App;
