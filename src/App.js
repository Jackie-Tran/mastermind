import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColourCircle from './components/ColourCircle'

function App() {
  return (
    <div className="App">
      <ColourCircle color='red'></ColourCircle>
      <ColourCircle color='orange'></ColourCircle>
      <ColourCircle color='yellow'></ColourCircle>
      <ColourCircle color='blue'></ColourCircle>
      <ColourCircle color='green'></ColourCircle>
      <ColourCircle color='magenta'></ColourCircle>
    </div>
  );
}

export default App;
