import React, { createClass, PropTypes } from 'react';
import css from 'classnames';

const UserRow = createClass({
    displayName: 'UserRow',

    propTypes: {
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClickUser: PropTypes.func.isRequired,
        onRemoveUser: PropTypes.func.isRequired,
        selectedUser: PropTypes.string
    },

    onClickUser() {
        const { email, onClickUser } = this.props;

        onClickUser(email);
    },

    onRemove() {
        const { email, onRemoveUser } = this.props;

        onRemoveUser({ email });
    },

    render() {
        const { email, name, selectedUser } = this.props;

        const classNames = css('users__row', {
            'users__row--active': selectedUser === email
        });

        return (
            <tr className={classNames} onClick={this.onClickUser}>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <button onClick={this.onRemove}>Remove</button>
                </td>
            </tr>
        );
    }
});

export default UserRow;
