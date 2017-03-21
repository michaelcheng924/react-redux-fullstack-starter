import express from 'express';
import { sendUsers } from 'app/server/routes/users/utils';
import { User } from 'app/server/db/user-schema';

const router = express.Router();

router.get('/', (req, res) => {
    sendUsers(res);
});

router.post('/', (req, res) => {
    const { email, name } = req.body;

    const user = new User({
        email,
        name
    });

    user.save((err, result) => {
        sendUsers(res);
    });
});

router.delete('/', (req, res) => {
    const email = req.body.email;

    User.remove({ email }, err => {
        sendUsers(res);
    });
});

export default router;
