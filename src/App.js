import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
