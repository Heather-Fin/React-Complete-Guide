import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Heather', age: 24},
      {name: 'Maya', age: 3.5},
      {name: 'Kimora', age: 8}
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Krista', age: 54},
        {name: 'Maya', age: 3.5},
        {name: 'Kimora', age: 8}
      ]
    });
  }
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Sleeping</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
