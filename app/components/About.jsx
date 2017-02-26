import React, { createClass } from 'react';
import { Link } from 'react-router';

const About = createClass({
    render() {
        return (
            <div className="about">
                <h1 className="about__heading">About</h1>
                <div>This is the About page.</div>
            </div>
        );
    }
});

export default About;
