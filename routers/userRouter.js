const express = require('express');
const { users, userDetails, editProfile, changePassowrd } = require('../controllers/usersController');
const userRouter = express.Router();
const routes = require('../routes');

userRouter.get(routes.users, users);
userRouter.get(routes.userDetails, userDetails);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassowrd, changePassowrd);

module.exports = userRouter;