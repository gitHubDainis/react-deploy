import React from 'react';
import './App.css';
import image from './img/pika.png';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
        <h2>Author: Detective Pikachu</h2>
        <h2>Year: 2021</h2>
        <h2>Weather: hailstorm</h2>
      <img src={image} alt="profile-image" />
    </div>
  );
}

export default App;
