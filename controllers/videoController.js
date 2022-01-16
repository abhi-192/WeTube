const videosArr = require('../db');
const home = (req,res) => res.render("home", { pageTitle: "Home",  videosArr });

const search = (req,res) => {   
    const { query: { term: searchingBy } } = req;
    res.render('search', { pageTitle: "Search" , searchingBy, videosArr });
}

const videos = (req,res) => res.render('video', { pageTitle: "Video" });

const getUpload = (req,res) => res.render('upload',  { pageTitle: "Upload" });
const postUpload = (req,res) => {
    const { body : { file, title, description} } = req;
    // TO DO: Upload and save video
}

const videoDetail = (req,res) => res.render('videoDetail', { pageTitle: "Video Detail" });
const editVideo = (req,res) => res.render('editVideo', { pageTitle: "Edit Video" });
const deleteVideo = (req,res) => res.render('deleteVideo', { pageTitle: "Delete Video" });


module.exports = {
    home,
    search,
    videos,
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo
}