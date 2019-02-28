import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends'
import FriendForm from './components/FriendForm'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  addFriend = (e, friend) => {
    axios.post('http://localhost:5000/friends', friend)
      .then(res => { console.log(res); })
      .catch(err => { console.log(err) });
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => { this.setState({ friends: response.data }); })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends List</h1>
        <FriendForm />
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
