//const videosArr = require('../db');
const routes = require('../routes');
import Video from "../models/Video";
const home = async (req,res) => {
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home",  videos });
    }
    catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home",  videos: [] });
    }
};

const search = (req,res) => {   
    const { query: { term: searchingBy } } = req;
    res.render('search', { pageTitle: "Search" , searchingBy, videos });
};

const videos = (req,res) => res.render('video', { pageTitle: "Video" });

const getUpload = (req,res) => res.render('upload',  { pageTitle: "Upload" });
const postUpload = async (req,res) => {
    const { 
        body : { title, description },
        file : { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};

const videoDetail = async (req,res) => {
    const { params: { id } } = req;
    try{
        const video = await Video.findById(id);
        res.render('videoDetail', { pageTitle: "Video Detail", video });
    }
    catch(error){
        console.log('Error', error);
        res.redirect(routes.home);
    }
}

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