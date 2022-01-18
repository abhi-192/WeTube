const routes = require('./routes');
const multer = require('multer');

const multerVideo = multer({ dest: "uploads/videos/" });

const localsMiddleware = (req,res,next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = req.user || {} ;
    next();
}

const onlyPublic = (req, res, next) => {
    if(req.user)
        res.redirect(routes.home);
    else
        next();
}

const onlyPrivate = (req,res,next) => {
    if(req.user)
        next();
    else
        res.redirect(routes.home);
}

const uploadVideo = multerVideo.single("videoFile");

module.exports = {
    localsMiddleware,
    uploadVideo,
    onlyPublic,
    onlyPrivate
};