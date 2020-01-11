import React, { Component } from 'react';
import TopBar from './components/TopBar';
import './App.css';
import PicCard from './components/PicCard';
import images from "./images.json"

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      highScore: 0,
      images: images
    };
  }

  increaseScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    if(this.state.currentScore >= this.state.highScore) {
      //I was unable to just set highScore to currentScore but this works as intended even when current score is reset.
      this.setState({ highScore: this.state.highScore + 1 });
    };
    this.forceUpdate();
  }

  resetScore = () => {
    this.setState({ currentScore: 0 });
    for(let i = 0; i <this.state.images.length; i++) {
      this.state.images.clicked = false;
    }
    this.forceUpdate();
  }

  imageClick = id => {
    const clicked = this.state.images; 
    const imageClicked = clicked.filter(images => images.id === id);
    /* RRRRRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
    if(!imageClicked.clicked) {
      this.increaseScore();
    } else {
      this.resetScore();
    }
  }

  

  render() {
    return (
      <div>
        <TopBar 
          current={this.state.currentScore}
          high={this.state.highScore}
        />
        <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {images.map(({ id, name, image, clicked }) => (
            <PicCard 
              game={this.imageClick}
              reset={this.resetScore}
              key={id}
              name={name}
              image={image}
              clicked={clicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
