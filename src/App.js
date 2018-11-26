import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainWindow from './components/MainWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <MainWindow />
      </div>
    );
  }
}

export default App;
