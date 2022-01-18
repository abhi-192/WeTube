const express = require('express');
const { logout, getLogin, postLogin, getJoin, postJoin } = require('../controllers/usersController');
const { home, search} = require('../controllers/videoController')
const globalRouter = express.Router();
const routes = require('../routes');
import { onlyPublic } from "../middlewares";

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPublic, logout);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.search, search);

module.exports = globalRouter;