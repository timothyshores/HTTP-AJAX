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
            id: '',
            update: false,
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
        if (!this.state.update) {
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
        else {
            axios
                .put(`http://localhost:5000/friends/${this.state.id}`,
                    {
                        name: this.state.name,
                        age: this.state.age,
                        email: this.state.email,
                        id: this.state.id,
                    }
                )
                .then(response => this.setState({
                    friends: response.data,
                    name: '',
                    age: '',
                    email: '',
                    id: '',
                    update: false,
                }))
                .catch(err => console.log(err));
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    deleteFriend = id => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => this.setState({ friends: response.data }))
            .catch(err => console.log(err));
    }

    updateFriend = id => {
        if (!this.state.update) {
            const { name, age, email } = this.state.friends.filter(friend => friend.id === id)[0];
            this.setState({ name, age, email, id: id, update: !this.state.update });
        }
        else {
            this.setState({
                name: '',
                age: '',
                email: '',
                id: '',
                update: !this.state.update
            })
        }
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
                    friends={this.state.friends}
                />
                <FriendsList
                    friends={this.state.friends}
                    deleteFriend={this.deleteFriend}
                    updateFriend={this.updateFriend}
                    update={this.state.update}
                />
            </div>
        );
    }
}

export default App;
