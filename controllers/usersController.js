const login = (req,res) => res.render('login');
const logout = (req,res) => res.render('logout');
const join = (req,res) => res.render('join');
const users = (req,res) => res.render('user');
const userDetails = (req,res) => res.render('userDetails');
const editProfile = (req,res) => res.render('editProfile');
const changePassowrd = (req,res) => res.render('changePassword');


module.exports = {
    login,
    logout,
    join,
    users,
    userDetails,
    editProfile,
    changePassowrd
}