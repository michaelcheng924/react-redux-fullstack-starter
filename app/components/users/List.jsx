import React, { createClass, PropTypes } from 'react';
import { isEmpty } from 'lodash';
import UserRow from 'app/components/users/Row';

const UsersList = createClass({
    displayName: 'UsersList',

    propTypes: {
        onClickUser: PropTypes.func.isRequired,
        onRemoveUser: PropTypes.func.isRequired,
        selectedUser: PropTypes.string,
        usersList: PropTypes.array.isRequired
    },

    renderUsers() {
        const { onClickUser, onRemoveUser, selectedUser, usersList } = this.props;

        return usersList.map((user, index) => {
            return (
                <UserRow
                    key={index}
                    {...user}
                    onClickUser={onClickUser}
                    onRemoveUser={onRemoveUser}
                    selectedUser={selectedUser}
                />
            );
        });
    },

    renderEmpty() {
        return <tr><td>No users added yet.</td></tr>;
    },

    render() {
        return (
            <table className="users__table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isEmpty(this.props.usersList) ? this.renderEmpty() : this.renderUsers()}
                </tbody>
            </table>
        );
    }
});

export default UsersList;
