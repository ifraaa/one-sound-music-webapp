import { Schema, model , models } from "mongoose";


const playlistSchema = new Schema({
    title: String,
    img: String,
})  

const Playlists = models.playlist || model('playlist', playlistSchema)

export default Playlists;
