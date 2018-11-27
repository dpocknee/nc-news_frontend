import React, { Component } from 'react';
import './App.css';
import './css/Article.css';
import './css/Comment.css';
import Navbar from './components/Navbar';
import MainWindow from './components/MainWindow';

class App extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="App">
        <Navbar topics={this.state.topics} searchHandler={this.searchHandler} />
        <MainWindow />
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
