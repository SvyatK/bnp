import React, { Component } from 'react';
import './App.css';
import './app/menu/menu.js';
import './app/engine/engine.js';
import './app/scenarios/scenarios.js';
import './app/controller/keyboard.js';
import './app/controller/gamepad.js';

class App extends Component {
  render() {
    return (
        <canvas id="app" />
    );
  }
}

export default App;
