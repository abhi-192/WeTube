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