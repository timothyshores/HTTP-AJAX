import React from 'react'

const FriendCard = props => {
    const { name, age, email } = props.friend;
    return (
        <div className="friend-card">
            <p className="name">Name: {name}</p>
            <p className="age">Age: {age}</p>
            <p className="email">Email: {email}</p>
        </div>
    );
}

export default FriendCard;