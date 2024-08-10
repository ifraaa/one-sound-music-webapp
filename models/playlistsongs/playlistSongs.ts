import { Schema, model , models } from "mongoose";


const playlistsongsSchema = new Schema({
    uri: String,
    name: String,
    album: String,
    artist: String,
    duration: Number,
    playlist: String
})  

const playlist_songs = models.playlistSongs || model('playlistSongs', playlistsongsSchema)

export default playlist_songs;
