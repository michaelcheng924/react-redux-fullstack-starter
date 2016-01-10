import React from 'react';
import { Route } from 'react-router';
import App from 'components/App';
import Course from 'components/Course';

export default (
    <Route component={App} path="/">
        <Route component={Course} path="course" />
    </Route>
);
