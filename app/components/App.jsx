import React, { createClass } from 'react';
import { Link } from 'react-router';

const App = createClass({
    displayName: 'App',

    render() {
        return (
            <div>
                <nav className="main-nav">
                    <Link className="main-nav__link" to="/">App Name</Link>
                    <div className="main-nav__menu-container">
                        <Link className="main-nav__link" to="/">Home</Link>
                        <Link className="main-nav__link" to="about">About (Routing Example)</Link>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
});

export default App;
