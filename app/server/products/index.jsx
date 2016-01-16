import express from 'express';
const router = express.Router();

router.post('/cart/update', (req, res) => {
    console.log(req);
    res.send('SUCCESS!');
});

export default router;
