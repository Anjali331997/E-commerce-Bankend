const express = require('express');
const { createUser, loginUser, getallUser, getaSingleUser, editUSer, deleteUSer } = require('../controller/userController');
const authRouter = express.Router();
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware')

// router.post('/resgister');
authRouter.post('/signup', createUser);
authRouter.post('/login', loginUser);

//Only admin can access these endpoints
//we are pasing a middleware here 'authMiddleware' with will check if the user  logged in or not
//the next middlewar isAdmin will check if the logged in persion is an asmin or not
authRouter.get('/allUsers',authMiddleware,isAdmin, getallUser)
authRouter.get('/:id', authMiddleware, isAdmin, getaSingleUser)
authRouter.put('/edit/:id',authMiddleware,isAdmin, editUSer)
authRouter.delete('/:id', authMiddleware,isAdmin, deleteUSer)

module.exports = { authRouter };