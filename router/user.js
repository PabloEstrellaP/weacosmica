const { Router } = require('express');
const router = Router();

const { googleAuth, login } = require('../controller/user');

router.post('/', googleAuth);
router.post('/login', login);

module.exports = router;