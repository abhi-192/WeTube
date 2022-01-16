const express = require('express');
const { videos, getUpload, postUpload, videoDetail, editVideo, deleteVideo } = require('../controllers/videoController');
const videoRouter = express.Router();
const routes = require('../routes');

videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

module.exports = videoRouter;