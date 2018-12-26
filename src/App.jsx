import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar/Navbar';
import MainWindow from './components/MainWindow';

class App extends Component {
  state = {
    searchInfo: null,
    // logged: false,
  };

  searchHandler = (event, searchInfo) => {
    event.preventDefault();
    this.setState({
      searchInfo,
    });
  };

  // login = status => {
  //   this.setState({ logged: status });
  // };

  render() {
    const { searchInfo } = this.state;
    console.log('searchInfo:', searchInfo);
    return (
      <div className="App">
        <Navbar searchHandler={this.searchHandler} />
        {' '}
        {/* login={this.login} /> */}
        <MainWindow searchInfo={searchInfo} />
        {' '}
        {/* login={this.login} /> */}
      </div>
    );
  }
}

export default App;
