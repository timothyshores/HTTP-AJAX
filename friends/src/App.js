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
            .then(response => this.setState({ friends: response.data }))
            .catch(err => console.log('Error: ', err));
    }

    render() {
        return (
            <div className="App">
                <h1>Friends</h1>
            </div>
        );
    }
}

export default App;
