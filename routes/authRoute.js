const express = require('express');
const { createUser, loginUser, getallUser, getaSingleUser } = require('../controller/userController');
const authRouter = express.Router();

// router.post('/resgister');
authRouter.post('/signup', createUser);
authRouter.post('/login', loginUser);
authRouter.get('/allUsers',getallUser)
authRouter.get('/singleUser/:id',getaSingleUser)

module.exports = { authRouter };