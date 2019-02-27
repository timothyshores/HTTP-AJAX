import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    // console.log("App.js componentDidMount()");
    axios
      .get('http://localhost:5000/friends')
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
