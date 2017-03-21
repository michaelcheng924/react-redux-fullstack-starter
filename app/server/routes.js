import users from 'app/server/routes/users';

export default function routes(app) {
    app.use('/api/users', users);
}
