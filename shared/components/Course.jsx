import React from 'react';
import { Link } from 'react-router';

export default class Course extends React.Component {
    render() {
        return (
            <div>
                Course course <Link to="/">App</Link>
            </div>
        );
    }
}
