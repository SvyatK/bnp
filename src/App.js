import React, { Component } from 'react';
import './App.css';
import './app/menu/menu.js';
import './app/scenarios/scenarios.js';
import './app/controller/keyboard.js';
import './app/controller/gamepad.js';
import main from './app/main';


class App extends Component {

  componentDidMount() {
    this.app = main;
    this.gameCanvas.appendChild(main.view);
  }

  componentWillUnmount() {
    this.app.stop();
  }

  render() {
    const component = this;
    return (
      <div className="canvas-wrapper" ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
    );
  }
}

export default App;
