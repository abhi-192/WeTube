const express = require('express');
const { users, userDetails, getEditProfile, postEditProfile, changePassword } = require('../controllers/usersController');
const userRouter = express.Router();
const routes = require('../routes');
import { onlyPrivate, uploadAvatar } from "../middlewares";

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetails(), userDetails);

module.exports = userRouter;