import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import PicCard from './components/PicCard';
import Rules from './components/Rules';
import images from "./images.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      highScore: 0,
      images: images
    };
  }

  mixUp = array => {
    array.sort((a, b) => {
      return .5 - Math.random();
    });
  };

  increaseScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    if (this.state.currentScore >= this.state.highScore) {
      //I was unable to just set highScore to currentScore but this works as intended even when current score is reset.
      this.setState({ highScore: this.state.highScore + 1 });
    };
    if (this.state.currentScore === 7) {
      //I couldn't get react-bootstrap modals to work.
      alert("You Win! FERDA")
      this.resetScore();
    }
  }

  //I know I should never mutate state like this. I'll never do it again after this assignment. Promise.
  resetScore = () => {
    const images = this.state.images;
    for (let i = 0; i < images.length; i++) {
      images[i].clicked = false;
    }
    this.setState({ currentScore: 0 });
  };

  imageClick = id => {
    const pic = this.state.images;
    const wasClicked = pic.filter(image => image.id === id);
    if (!wasClicked[0].clicked) {
      wasClicked[0].clicked = true;
      this.increaseScore();
      this.mixUp(pic);
      this.setState({ pic });
    } else {
      //I couldn't get react-bootstrap modals to work.
      alert("You Lose");
      this.resetScore();
    }
  };



  render() {
    return (
      <div>
        <TopBar
          current={this.state.currentScore}
          high={this.state.highScore}
        />
        <div className="layout d-flex justify-content-center flex-wrap">
          {this.state.images.map(({ id, name, image, clicked }) => (
            <PicCard
              game={this.imageClick}
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
            />
          ))}
          <Rules />
        </div>
      </div>
    );
  }
}

export default App;