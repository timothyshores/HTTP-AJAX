import React from 'react'

const FriendCard = props => {
    const { name, age, email, id } = props.friend;
    return (
        <div className="friend-card">
            <p className="id">{id}</p>
            <p className="name">Name: {name}</p>
            <p className="age">Age: {age}</p>
            <p className="email">Email: {email}</p>
            <button onClick={() => props.updateFriend(props.friend.id)}>
                {props.update ? 'Cancel' : 'Update'}
            </button>
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
        </div >
    );
}

export default FriendCard;