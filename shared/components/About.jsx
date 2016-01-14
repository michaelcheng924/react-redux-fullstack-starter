import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class About extends React.Component {
    render() {
        const { course, dispatch } = this.props;

        return (
            <div>
                <Link to="/">Home</Link>
            </div>
        );
    }
}
