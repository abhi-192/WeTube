const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalRouter = require('./routers/globalRouter');
const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter');
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

const handleRequest = (req,res) => {
    res.send("Hello from server");
}

const CookieStore = MongoStore(session);

app.use(helmet());
app.set('view engine',"pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(middleware.localsMiddleware);
app.use(middleware.uploadVideo);
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUnintialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection });
}));
app.use(passport.initialize());
app.use(passport.session());

//app.get("/",handleRequest);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

app.listen(PORT, handleListening); 