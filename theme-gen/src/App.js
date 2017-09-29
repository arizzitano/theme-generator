import React, { Component } from 'react';
import './App.css';

import Stage from './Stage';
import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <Stage />
      </div>
    );
  }
}

export default App;
