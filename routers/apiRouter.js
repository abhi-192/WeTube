const express = require('express');
const routes = require('../routes');
import { postRegisterView, postAddComment } from '../controllers/videoController';

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

module.exports = apiRouter;