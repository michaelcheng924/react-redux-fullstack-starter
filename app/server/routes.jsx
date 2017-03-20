import users from './routes/users';

export default function routes(app) {
    app.use('/api/users', users);
}
