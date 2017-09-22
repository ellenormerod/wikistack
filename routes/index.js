const wikiRouter = require('./wiki');
const userRouter = require('./user');
const express = require('express');
const router = express.Router();
// ...
router.get('/', function (req, res, next) {
    res.send('got to GET /');
});

router.use('/wiki', wikiRouter);
// or, in one line: router.use('/wiki', require('./wiki'));

module.exports = router;