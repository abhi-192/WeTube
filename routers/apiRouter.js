const express = require('express');
const routes = require('../routes');
import { postRegisterView } from '../controllers/videoController';

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);

module.exports = apiRouter;