import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import Course from 'components/Course';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={Course} path="course" />
    </Route>
);
