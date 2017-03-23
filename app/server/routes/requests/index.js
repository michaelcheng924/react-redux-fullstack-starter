import express from 'express';
import { sendRequests } from 'app/server/routes/requests/utils';
import { Request } from 'app/server/db/request-schema';

const router = express.Router();

router.get('/', (req, res) => {
    sendRequests(res);
});

router.post('/', (req, res) => {
    const { value } = req.body;

    const request = new Request({
        value
    });

    request.save((err, result) => {
        sendRequests(res);
    });
});

router.delete('/', (req, res) => {
    const _id = req.body._id;

    Request.remove({ _id }, err => {
        sendRequests(res);
    });
});

export default router;
