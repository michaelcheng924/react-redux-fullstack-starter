import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import About from 'components/About';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={About} path="about" />
    </Route>
);
