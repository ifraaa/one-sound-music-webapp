import { Schema, model , models } from "mongoose";


const RecentlyPlayedSchema = new Schema({
    uri: String,
    name: String,
    artist: String,
    albumOfTrack: String,
    duration: Number
})  

const RecentlyPlayed = models.recentlyplayeds || model('recentlyplayeds', RecentlyPlayedSchema)

export default RecentlyPlayed;
