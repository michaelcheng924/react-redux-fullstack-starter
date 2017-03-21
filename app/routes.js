import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'app/components/App';
import Home from 'app/components/Home';
import About from 'app/components/About';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={About} path="about" />
    </Route>
);
