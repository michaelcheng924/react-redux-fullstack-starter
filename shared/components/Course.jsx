import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Course extends React.Component {
    render() {
        const { course, dispatch } = this.props;

        return (
            <div>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        course: state.course.toJS()
    };
}

export default connect(mapStateToProps)(Course);
