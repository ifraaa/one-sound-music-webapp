import mongoose from "mongoose";

const MongoConnect = async () => {
    mongoose.connect("mongodb://localhost:27017/Snotify").then(() => {
        console.log("Connected to MongoDB")
    }).catch((err) => {
        console.log(err)
    })
}


export default MongoConnect;


