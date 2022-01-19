const routes = require('../routes');
import passport from "passport";
import User from "../models/User";

const getLogin = (req, res) => res.render('login', { pageTitle: "Log In" });
const postLogin = (req, res) => passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

const githubLogin = passport.authenticate("github");

const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    // console.log(accessToken, refreshToken, profile, cb);
    const { _json: { id, avatar_url: avatarUrl, name, email } } = profile;
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl
        });
        return cb(null, newUser);
    }
    catch (error) {
        return cb(error);
    }
};

const facebookLogin = passport.authenticate("facebook");

const facebookLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    //console.log(accessToken, refreshToken, profile, cb);
    const { _json: { id, name, email } } = profile;
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.facebookId = id;
            avatarUrl: `https://graph.facebook.com/${id}/picture?type='large`;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            facebookId: id,
            avatarUrl: `https://graph.facebook.com/${id}/picture?type='large`
        });
        return cb(null, newUser);
    }
    catch (error) {
        return cb(error);
    }
}
const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
}

const postGithubLogIn = (req, res) => {
    res.redirect(routes.home);
}

const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

const getJoin = (req, res) => res.render('join', { pageTitle: "Join" });
const postJoin = async (req, res, next) => {
    //console.log(req.body);
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render('join', { pageTitle: "Join" });
    }
    else {
        try {
            const user = await User.create({
                name,
                email
            });
            await User.register(user, password);
            next();
        }
        catch (error) {
            console.log('Error', error);
            res.redirect(routes.home);
        }
    }
}

const getMe = (req, res) => {
    res.render("userDetails", { pageTitle: "User Detail", user: req.user });
};

const users = (req, res) => res.render('user', { pageTitle: "User" });

const userDetails = async (req, res) => {
    const { params: { id } } = req;
    try {
        const user = await User.findById(id);
        res.render('userDetails', { pageTitle: "User Details" });
    }
    catch (error) {
        res.redirect(routes.home);
    }
}

const getEditProfile = (req, res) => res.render('editProfile', { pageTitle: "Edit Profile" });
const changePassword = (req, res) => res.render('changePassword', { pageTitle: "Change Password" });


module.exports = {
    getLogin,
    postLogin,
    logout,
    getJoin,
    postJoin,
    users,
    userDetails,
    getEditProfile,
    changePassword,
    githubLoginCallback,
    githubLogin,
    postGithubLogIn,
    getMe,
    facebookLogin,
    facebookLoginCallback,
    postFacebookLogin
}