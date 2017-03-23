import React, { createClass } from 'react';

const RequestRow = createClass({
    onRemoveRequest() {
        const { _id, onRemoveRequest } = this.props;

        onRemoveRequest({ _id });
    },

    render() {
        return (
            <div className="requests__row">
                {this.props.value}
                <button onClick={this.onRemoveRequest}>Remove</button>
            </div>
        );
    }
});

export default RequestRow;
