// Import necessary modules
import { NextResponse } from "next/server";
import MongoConnect from "@/config/dbconnection";
import LikedSongs from "@/models/likedsongs/likedsongs";


MongoConnect();

// GET route to fetch liked songs
export async function GET(req: Request) {
    try {
        const likedSongs = await LikedSongs.find();
        return NextResponse.json({ body: likedSongs }, { status: 200 });
    } catch (err) {
        return NextResponse.error();
    }
}
// POST route to add a song to liked songs
export async function POST(req: Request) {
    const body = await req.json();  
    const { uri,name,album,artist,duration} = body
    try {
        LikedSongs.collection.insertOne({uri,name,album,artist,duration})
        return NextResponse.json({message: "Song added to recently played"})
    } catch (error) {
        return NextResponse.error();
    }

    
    
}

// DELETE route to remove a song from liked songs
export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { uri } = body;

        // Find and delete the song from liked songs
        const deletedSong = await LikedSongs.findOneAndDelete({ uri });

        if (!deletedSong) {
            // If the song is not found, return an error indicating it's not in liked songs
            return NextResponse.error();
        }

        return NextResponse.json({ message: "Song removed from liked songs" });
    } catch (error) {
        return NextResponse.error();
    }
}
