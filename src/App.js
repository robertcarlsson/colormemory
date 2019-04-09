import React, { Component } from 'react';
import './css/App.css';
import Header from './Header'
import Board from './game/Board'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isPlaying: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isPlaying: true
      }
    })
  }

  render() {
    return (
      <div className="App App-header">
        {!this.state.isPlaying && <Header handler={this.handleClick}/>}
        {this.state.isPlaying && <Board />}
      </div>
    );
  }
}

export default App;
