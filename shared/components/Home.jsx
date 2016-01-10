import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="course">Course</Link>
            </div>
        );
    }
}
