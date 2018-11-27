import React, { Component } from 'react';
import './App.css';
import './css/Article.css';
import './css/Comment.css';
import Navbar from './components/Navbar';
import MainWindow from './components/MainWindow';
import { navigate } from '@reach/router';

class App extends Component {
  state = {
    topics: [],
    searchInfo: null
  };
  render() {
    return (
      <div className="App">
        <Navbar searchHandler={this.searchHandler} />
        <MainWindow searchInfo={this.state.searchInfo} />
      </div>
    );
  }
  searchHandler = (event, searchInfo) => {
    event.preventDefault();
    this.setState({
      searchInfo: searchInfo
    });
  };
}

export default App;
