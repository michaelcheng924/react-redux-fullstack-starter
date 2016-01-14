import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="about">About</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        course: state.course.toJS()
    };
}

export default connect(mapStateToProps)(Home);
