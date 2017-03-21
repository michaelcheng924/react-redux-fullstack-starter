import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectedUserSelector, usersListSelector } from 'app/selectors/users';
import { changeSelectedUser } from 'app/actions/UsersActions';
import { addUser, getUsers, removeUser } from 'app/api/users';

import UsersAdd from 'app/components/users/Add';
import UsersList from 'app/components/users/List';

const Users = createClass({
    displayName: 'Users',

    propTypes: {
        onAddUser: PropTypes.func.isRequired,
        onClickUser: PropTypes.func.isRequired,
        onGetUsers: PropTypes.func.isRequired,
        onRemoveUser: PropTypes.func.isRequired,
        selectedUser: PropTypes.string,
        usersList: PropTypes.array.isRequired
    },

    componentDidMount() {
        this.props.onGetUsers();
    },

    getDefaultProps() {
        return {
            selectedUser: ''
        };
    },

    renderList() {
        const { onClickUser, onRemoveUser, selectedUser, usersList } = this.props;

        return (
            <UsersList
                onClickUser={onClickUser}
                onRemoveUser={onRemoveUser}
                selectedUser={selectedUser}
                usersList={usersList}
            />
        );
    },

    render() {
        const { onAddUser } = this.props;

        return (
            <div className="users">
                <UsersAdd onAddUser={onAddUser} />
                {this.renderList()}
            </div>
        );
    }
});

const mapStateToProps = createSelector(
    selectedUserSelector,
    usersListSelector,
    (selectedUser, usersList) => ({ selectedUser, usersList })
);

const mapActionsToProps = {
    onAddUser: addUser,
    onClickUser: changeSelectedUser,
    onGetUsers: getUsers,
    onRemoveUser: removeUser
};

export default connect(mapStateToProps, mapActionsToProps)(Users);
