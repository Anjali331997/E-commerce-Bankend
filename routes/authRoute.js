const express = require('express');
const { createUser, loginUser, getallUser, getaSingleUser, editUSer, deleteUSer } = require('../controller/userController');
const authRouter = express.Router();
const {authMiddleware} = require('../middleware/authMiddleware')

// router.post('/resgister');
authRouter.post('/signup', createUser);
authRouter.post('/login', loginUser);
authRouter.get('/allUsers',getallUser)
authRouter.get('/:id',authMiddleware,getaSingleUser)
authRouter.put('/edit/:id',editUSer)
authRouter.delete('/edit/:id',deleteUSer)

module.exports = { authRouter };