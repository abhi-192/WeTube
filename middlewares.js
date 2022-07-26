const routes = require('./routes');
const multer = require('multer');

const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });

const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || {};
    next();
}

const onlyPublic = (req, res, next) => {
    if (req.user)
        res.redirect(routes.home);
    else
        next();
}

const onlyPrivate = (req, res, next) => {
    if (req.user)
        next();
    else
        res.redirect(routes.home);
}

const uploadVideo = multerVideo.single("videoFile");

const uploadAvatar = multerVideo.single("avatar");


module.exports = {
    localsMiddleware,
    uploadVideo,
    onlyPublic,
    onlyPrivate,
    uploadAvatar
};