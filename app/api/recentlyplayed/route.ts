import { NextResponse } from "next/server";
import MongoConnect from "@/config/dbconnection";
import RecentlyPlayed from "@/models/recentlyplayed/recentlyplayed";


MongoConnect();

export async function GET(req: Request) {
    try {
        const recentlyPlayed = await RecentlyPlayed.find()
        recentlyPlayed.reverse()
        return NextResponse.json({body: recentlyPlayed},{status: 200})
    } catch (err) {
        return NextResponse.error();
    }
}


export async function POST(req: Request) {
    const body = await req.json();  
    const { uri,name,album,artist,duration} = body
    try {
        RecentlyPlayed.collection.insertOne({uri,name,album,artist,duration})
        return NextResponse.json({message: "Song added to recently played"})
    } catch (error) {
        return NextResponse.error();
    }

    
    
}