//const videosArr = require('../db');
const routes = require('../routes');
import Video from "../models/Video";

const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", videos });
    }
    catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

const search = async (req, res) => {
    const { query: { term: searchingBy } } = req;
    let videos = [];
    try {
        videos = await Video.find({ title: { $regex: searchingBy, $options: "i" } });
    }
    catch (error) {
        console.log('Error', error);
    }
    res.render('search', { pageTitle: "Search", searchingBy, videos });
};

const videos = (req, res) => res.render('video', { pageTitle: "Video" });

const getUpload = (req, res) => res.render('upload', { pageTitle: "Upload" });
const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};

const videoDetail = async (req, res) => {
    const { params: { id } } = req;
    try {
        const video = await Video.findById(id);
        res.render('videoDetail', { pageTitle: video.title, video });
    }
    catch (error) {
        console.log('Error', error);
        res.redirect(routes.home);
    }
}

const getEditVideo = async (req, res) => {
    const { params: { id } } = req;
    try {
        const video = await Video.findById(id);
        res.render('editVideo', { pageTitle: `Edit ${video.title}`, video });
    }
    catch (error) {
        console.log('Error', error);
        res.redirect(routes.home);
    }
}

const postEditVideo = async (req, res) => {
    const { params: { id } } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    }
    catch (error) {
        console.log('Error', error);
        res.redirect(routes.home);
    }
}

const deleteVideo = async (req, res) => {
    const { params: { id } } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    }
    catch (error) {
        console.log('Error', error);
    }
    res.redirect(routes.home);
}

module.exports = {
    home,
    search,
    videos,
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
}