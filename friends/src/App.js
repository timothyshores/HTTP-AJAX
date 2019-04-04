import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => this.setState({ friends: response.data }))
            .catch(err => console.log('Error: ', err));
    }

    handleSubmit = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/friends`,
                {
                    name: this.state.name,
                    age: this.state.age,
                    email: this.state.email,
                })
            .then(response => {
                this.setState({
                    friends: response.data,
                    name: '',
                    age: '',
                    email: '',
                })
            })
            .catch(err => { console.log(err) });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="App">
                <h1>Friends</h1>
                <FriendForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    name={this.state.name}
                    email={this.state.email}
                    age={this.state.age}
                />
                <FriendsList friends={this.state.friends} />
            </div>
        );
    }
}

export default App;
