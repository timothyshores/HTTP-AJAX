import React from 'react';

const FriendForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    onChange={props.handleChange}
                />
            </label>
            <label>
                Age:
                <input
                    type="text"
                    name="age"
                    onChange={props.handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    onChange={props.handleChange}
                />
            </label>
            <input type="submit" name="Submit" />
        </form>
    );
}

export default FriendForm;