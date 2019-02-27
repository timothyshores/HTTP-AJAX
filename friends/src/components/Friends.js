import React from 'react';
// import ReactDOM from 'react-dom';

function Friends(props) {
    if (props.friends.length === 0) {
        return <h3>Loading friends list...</h3>
    }

    return (
        <div className="friends-list">
            {props.friends.map(friend => (
                <div className="friend-card" key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <br />
                </div>
            ))}
        </div>
    );

}

export default Friends;
