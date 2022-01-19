const express = require('express');
const { videos, getUpload, postUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo } = require('../controllers/videoController');
const videoRouter = express.Router();
const { uploadVideo } = require('../middlewares');
const routes = require('../routes');
import { onlyPrivate } from "../middlewares";

videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

module.exports = videoRouter;