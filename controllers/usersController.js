const routes = require('../routes');
import passport from "passport";
import User from "../models/User";

const getLogin = (req,res) => res.render('login', { pageTitle: "Log In" });
const postLogin = (req,res) => passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

const logout = (req,res) => res.redirect(routes.home);
 
const getJoin = (req,res) => res.render('join', { pageTitle: "Join" });
const postJoin = async (req, res, next) => {
    //console.log(req.body);
    const {
        body: { name, email, password, password2 }
    } = req;
    if( password !== password2 ){
        res.status(400);
        res.render('join', { pageTitle: "Join" });
    }
    else{
        try{
            const user = await User.create({
                name,
                email
            });
            await User.register(user, password);
            next();
        }
        catch(error){
            console.log('Error',error);
            res.redirect(routes.home);
        }
    }
}

const users = (req,res) => res.render('user', { pageTitle: "User" });
const userDetails = (req,res) => res.render('userDetails', { pageTitle: "User Details" });
const editProfile = (req,res) => res.render('editProfile', { pageTitle: "Edit Profile" });
const changePassword = (req,res) => res.render('changePassword', { pageTitle: "Change Password" });


module.exports = {
    getLogin,
    postLogin,
    logout,
    getJoin,
    postJoin,
    users,
    userDetails,
    editProfile,
    changePassword
}