const home = (req,res) => res.render("home");
const search = (req,res) => res.render('search');
const videos = (req,res) => res.render('video');
const upload = (req,res) => res.render('upload');
const videoDetail = (req,res) => res.render('videoDetail');
const editVideo = (req,res) => res.render('editVideo');
const deleteVideo = (req,res) => res.render('deleteVideo');


module.exports = {
    home,
    search,
    videos,
    upload,
    videoDetail,
    editVideo,
    deleteVideo
}