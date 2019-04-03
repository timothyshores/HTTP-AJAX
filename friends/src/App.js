import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => console.log('Response: ', response))
            .catch(err => console.log('Error: ', err));
    }

    render() {
        return (
            <div className="App">
                <h1>App.js</h1>
            </div>
        );
    }
}

export default App;
