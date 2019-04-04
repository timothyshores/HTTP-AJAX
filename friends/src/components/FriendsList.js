import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = props => {
    return (
        <div className="friends-list">
            {props.friends.map(friend => (
                <FriendCard
                    friend={friend}
                    key={friend.id}
                    deleteFriend={props.deleteFriend}
                />
            ))}
        </div>
    );
}

export default FriendsList;