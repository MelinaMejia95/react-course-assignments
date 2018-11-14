import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    textLength: null,
    text: '',
  };
  hi = 'hello'

  lengthChangeHandler = (event) => {
    //console.log(event.target.value)
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value
    }) 
  }


  deleteCharHandler = (charIndex) => {
    const text = this.state.text.split('');
    text.splice(charIndex, 1);
    const updateText = text.join('');
    this.setState({
      text: updateText, 
      textLength: updateText.length
    });
  }

  render() {

    let char = null;

      char = (
        <div>
          {this.state.text.split('').map((char, index) => {
            return <Char click={() => this.deleteCharHandler(index)} key={index} char={char} ></Char>
          })}
        </div>
      );

    return (
      <div className="App">
        <h1>This is the second task</h1>
        <input type="text" onChange={this.lengthChangeHandler} value={this.state.text}/>
        <p>This is the text length: {this.state.textLength}</p>
        <Validation length={this.state.textLength}></Validation>
        {char}
      </div>
    );
  }
}

export default App;
