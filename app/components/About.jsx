import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h2 className="about__heading">About</h2>

                <div>Welcome to the React Redux Fullstack Starter! To help get you started, here is an overview of what's contained here (this information is also available at the <a href="http://github.com/michaelcheng429/react-redux-fullstack-starter" target="_blank">GitHub repository</a>:</div>

                <h3>Stack</h3>
                This starter includes the following (among other smaller dependencies):

                <ul>
                    <li><strong>React + react-router</strong></li>
                    <li><strong>Redux + immutable</strong></li>
                    <li><strong>Webpack</strong></li>
                    <li><strong>Mocha + Chai (testing)</strong></li>
                </ul>
            </div>
        );
    }
}
