import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectedUserSelector, usersListSelector } from '../../selectors/users';
import { changeSelectedUser } from '../../actions/UsersActions';
import { addUser, getUsers, removeUser } from '../../api/users';

import UsersAdd from './Add';
import UsersList from './List';

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

const mapActionsToProps = dispatch => ({
    onAddUser: addUser.request(dispatch),
    onClickUser: bindActionCreators(changeSelectedUser, dispatch),
    onGetUsers: getUsers.request(dispatch),
    onRemoveUser: removeUser.request(dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Users);
