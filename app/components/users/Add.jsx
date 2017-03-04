import React, { createClass, PropTypes } from 'react';

const UsersAdd = createClass({
    displayName: 'UsersAdd',

    propTypes: {
        onAddUser: PropTypes.func.isRequired
    },

    onAddUser(event) {
        event.preventDefault();

        this.props.onAddUser({
            name: this.nameInput.value,
            email: this.emailInput.value
        });

        this.nameInput.value = '';
        this.emailInput.value = '';
    },

    render() {
        return (
            <form className="users__form" onSubmit={this.onAddUser}>
                <input type="text" placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
                <input type="text" placeholder="Email" ref={emailInput => this.emailInput = emailInput} />
                <button>Add User</button>
            </form>
        );
    }
});

export default UsersAdd;
