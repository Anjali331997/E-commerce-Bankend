const express = require('express');
const { createUser } = require('../controller/userController');
const authRouter = express.Router();

// router.post('/resgister');
authRouter.post('/signup', createUser);

module.exports = { authRouter };