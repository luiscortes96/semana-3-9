const router = require('express').Router();
const apiRouterAuth = require('./api/auth');

router.use('/auth', apiRouterAuth);

module.exports = router;