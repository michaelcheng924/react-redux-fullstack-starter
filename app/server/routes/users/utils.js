import { User } from 'app/server/db/user-schema';

export function sendUsers(res) {
    User.find((err, results) => {
        res.send({ users: results });
    });
}
