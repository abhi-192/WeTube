const login = (req,res) => res.render('login', { pageTitle: "Log In" });
const logout = (req,res) => res.render('logout', { pageTitle: "Log Out" });
const join = (req,res) => res.render('join', { pageTitle: "Join" });
const users = (req,res) => res.render('user', { pageTitle: "User" });
const userDetails = (req,res) => res.render('userDetails', { pageTitle: "User Details" });
const editProfile = (req,res) => res.render('editProfile', { pageTitle: "Edit Profile" });
const changePassword = (req,res) => res.render('changePassword', { pageTitle: "Change Password" });


module.exports = {
    login,
    logout,
    join,
    users,
    userDetails,
    editProfile,
    changePassword
}