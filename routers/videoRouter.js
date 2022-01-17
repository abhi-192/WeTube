const express = require('express');
const { videos, getUpload, postUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo } = require('../controllers/videoController');
const videoRouter = express.Router();
const { uploadVideo } = require('../middlewares');
const routes = require('../routes');

videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

module.exports = videoRouter;