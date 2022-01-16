const routes = require('./routes');

const localsMiddleware = (req,res,next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    next();
}

module.exports = localsMiddleware;