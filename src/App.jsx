import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar/Navbar';
import MainWindow from './components/MainWindow';

class App extends Component {
  state = {
    searchInfo: null,
    loggedIn: false,
  };

  searchHandler = (event, searchInfo) => {
    event.preventDefault();
    this.setState({
      searchInfo,
    });
  };

  login = status => {
    this.setState({ loggedIn: status });
  };

  render() {
    const { searchInfo, loggedIn } = this.state;
    return (
      <div className="App">
        <Navbar searchHandler={this.searchHandler} login={this.login} />
        <MainWindow searchInfo={searchInfo} loggedIn={loggedIn} />
      </div>
    );
  }
}

export default App;
