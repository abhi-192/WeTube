const express = require('express');
const { users, userDetails, editProfile, changePassword } = require('../controllers/usersController');
const userRouter = express.Router();
const routes = require('../routes');

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetails, userDetails);

module.exports = userRouter;