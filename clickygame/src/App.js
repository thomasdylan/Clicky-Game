import React, { Component } from 'react';
import TopBar from './components/TopBar';
import './App.css';
import PicCard from './components/PicCard';

class App extends Component {

  render() {
    return (
      <div>
        <TopBar />
        <PicCard />
        <PicCard />
        <PicCard />
      </div>
    );
  }
}

export default App;
