const routes = require('./routes');
const multer = require('multer');

const multerVideo = multer({ dest: "uploads/videos/" });

const localsMiddleware = (req,res,next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
}

const uploadVideo = multerVideo.single("videoFile");

module.exports = {
    localsMiddleware,
    uploadVideo
};