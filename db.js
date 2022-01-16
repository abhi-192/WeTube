// const videosArr = [
//     {
//         id: 123,
//         title: 'Video 1',
//         description: 'This is video 1',
//         views: 100,
//         videoFile: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//         creator: {
//             id: 273981,
//             name: "Bunny",
//             email: "bunny@gmail.com"
//         }
//     },
//     {
//         id: 124,
//         title: 'Video 2',
//         description: 'This is video 2',
//         views: 100,
//         videoFile: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//         creator: {
//             id: 273981,
//             name: "Bunny",
//             email: "bunny@gmail.com"
//         }
//     },
//     {
//         id: 125,
//         title: 'Video 3',
//         description: 'This is video 3',
//         views: 100,
//         videoFile: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//         creator: {
//             id: 273981,
//             name: "Bunny",
//             email: "bunny@gmail.com"
//         }
//     }
// ]

// module.exports = videosArr;

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, 
    {
        useNewUrlParser: true
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connnected to db");
const handleError = (error) => console.log("Error", error);

db.once("open", handleOpen);
db.on("error", handleError);