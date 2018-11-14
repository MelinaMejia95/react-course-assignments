import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {

  person = {
    userName: 'melina95'
  }

  state = {
    user: [
      { userName: 'melina95' },
      { userName: 'andrea22' }
    ]
  }

  userChangedHandler = (event) => {
    this.setState({
      user: [
        { userName: event.target.value[0] },
        { userName: 'Andreita' }
      ]
    })
  }

  render() {

    const style= {
      fontFamily: "'Anton', sans-serif",
    }

    return (
      <div className="App">
        <h1 style={style}>This is the first assignment of the course!</h1>
        <UserInput changed={this.userChangedHandler} userName={this.state.user[0].userName}></UserInput>
        <UserOutput userName={this.state.user[0].userName}></UserOutput>
        <UserInput changed={this.userChangedHandler} userName={this.state.user[1].userName}></UserInput>
        <UserOutput userName={this.state.user[1].userName}></UserOutput>
      </div>
    );
  }
}

export default App;
