import { Request } from 'app/server/db/request-schema';

export function sendRequests(res) {
    Request.find((err, results) => {
        res.send({ requests: results });
    });
}
