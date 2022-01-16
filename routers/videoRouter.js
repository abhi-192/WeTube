const express = require('express');
const { videos, upload, videoDetail, editVideo, deleteVideo } = require('../controllers/videoController');
const videoRouter = express.Router();
const routes = require('../routes');

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

module.exports = videoRouter;