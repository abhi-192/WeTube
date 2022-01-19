const express = require('express');
const { getMe, logout, getLogin, postLogin, getJoin, postJoin, githubLogin, postGithubLogIn, facebookLogin, passportFacebookLogin } = require('../controllers/usersController');
const { home, search } = require('../controllers/videoController')
const globalRouter = express.Router();
const routes = require('../routes');
import { onlyPublic, onlyPrivate } from "../middlewares";
import passport from "passport";
import { facebook } from "../routes";

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.search, search);
globalRouter.get(routes.github, githubLogin);
globalRouter.get(
    routes.githubCallback,
    passport.authenticate('github', { failureRedirect: '/login' }),
    postGithubLogIn
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
    routes.facebookCallback,
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    passportFacebookLogin
);

module.exports = globalRouter;