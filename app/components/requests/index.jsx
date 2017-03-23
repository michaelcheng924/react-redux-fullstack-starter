import React, { createClass } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addRequest, getRequests, removeRequest } from 'app/api/requests';
import { setErrorMessage } from 'app/actions/RequestFormActions';
import { errorMessageSelector, requestsListSelector } from 'app/selectors/requests';
import RequestRow from 'app/components/requests/Row';

const RequestForm = createClass({
    componentDidMount() {
        this.props.onGetRequests();
    },

    onSubmit(event) {
        event.preventDefault();

        const { onAddRequest, onSetErrorMessage } = this.props;

        const requestInput = this.requestInput.value;

        if (!requestInput) {
            onSetErrorMessage('Request cannot be empty.');
            return;
        }

        onAddRequest({ value: requestInput });
        this.requestInput.value = '';
    },

    resetErrorMessage() {
        const { errorMessage, onSetErrorMessage } = this.props;

        if (errorMessage) {
            this.props.onSetErrorMessage(null);
        }
    },

    renderErrorMessage() {
        if (!this.props.errorMessage) { return null; }

        return <div className="requests__error-message">{this.props.errorMessage}</div>;
    },

    render() {
        const { list, onRemoveRequest } = this.props;

        return (
            <div>
                <form className="requests" onSubmit={this.onSubmit}>
                    <h2>Request Form</h2>
                    {this.renderErrorMessage()}
                    <textarea
                        placeholder="What do you need?"
                        onChange={this.resetErrorMessage}
                        ref={requestInput => this.requestInput = requestInput}
                    />
                    <br />
                    <button>Submit</button>
                </form>
                {
                    list.map(request => {
                        return <RequestRow key={request._id} {...request} onRemoveRequest={onRemoveRequest} />;
                    })
                }
            </div>
        );
    }
});

const mapStateToProps = createSelector(
    errorMessageSelector,
    requestsListSelector,
    (errorMessage, list) => ({ errorMessage, list })
);

const mapActionsToProps = {
    onGetRequests: getRequests,
    onAddRequest: addRequest,
    onRemoveRequest: removeRequest,
    onSetErrorMessage: setErrorMessage
};

export default connect(mapStateToProps, mapActionsToProps)(RequestForm);
