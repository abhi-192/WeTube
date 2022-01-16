const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalRouter = require('./routers/globalRouter');
const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter');
const routes = require('./routes');
const localsMiddleware = require('./middlewares')
const db = require('./db');
const dotenv = require('dotenv');
const Video = require('./models/Video');
const Comment = require('./models/Comment')
const app = express();

const PORT = process.env.PORT || 3000;

const handleListening = () => console.log("Listening on port http://localhost:3000");

const handleRequest = (req,res) => {
    res.send("Hello from server");
}

app.use(helmet());
app.set('view engine',"pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(localsMiddleware);
app.use(morgan("dev"));

//app.get("/",handleRequest);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

app.listen(PORT, handleListening); 