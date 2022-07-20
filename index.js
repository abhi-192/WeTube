const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalRouter = require('./routers/globalRouter');
const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter');
const apiRouter = require('./routers/apiRouter');
const routes = require('./routes');
const middleware = require('./middlewares');
const dotenv = require('dotenv');
import "./db";
import './models/Video';
import './models/Comment';
import './models/User';
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import "./passport";
const app = express();

const PORT = process.env.PORT || 3000;

const handleListening = () => console.log("Listening on port http://localhost:3000");

const handleRequest = (req, res) => {
    res.send("Hello from server");
}

const CookieStore = MongoStore(session);

app.use(helmet());
app.set('view engine', "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.localsMiddleware);
app.use(middleware.uploadVideo);
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUnintialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());



app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

app.listen(PORT, handleListening);

/*

VidMatch
 - login, register, logout facility
 - upload, watch and comment on videos
 - livestream yourself
 - login with github/ facebook
 - search, edit and delete your own videos
 - visit a user profile and vidoes uploaded by user
 - Tech Stack - NodeJS, Express, MongoDB, Pug, babel, scss
 - Source Code: github.com/abhi-192/projects/vidmatch

 */