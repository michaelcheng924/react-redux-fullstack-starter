import { User } from '../../db/user-schema';

export function sendUsers(res) {
    User.find((err, results) => {
        res.send({ users: results });
    });
}
