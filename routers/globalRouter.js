 const express = require('express');
const { logout, getLogin, postLogin, getJoin, postJoin } = require('../controllers/usersController');
const { home, search} = require('../controllers/videoController')
const globalRouter = express.Router();
const routes = require('../routes');

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.search, search);

module.exports = globalRouter;