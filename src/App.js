import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Heather" age="24" />
        <Person name="Maya" age="3.5">My Hobbies: Sleeping</Person>
        <Person name="Kimora" age="8" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
