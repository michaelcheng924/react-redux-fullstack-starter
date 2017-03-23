import users from 'app/server/routes/users';
import requests from 'app/server/routes/requests';

export default function routes(app) {
    app.use('/api/users', users);
    app.use('/api/requests', requests);
}
