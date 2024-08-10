export interface Song
{
    data: data
}

interface data {
    uri: string,
    name: string,
    artist: string
    albumOfTrack: albumOfTrack
    duration: duration
}
interface albumOfTrack{
    uri: string,
    name: string,
    coverArt: coverArt   
}
interface duration{
    totalMilliseconds: number
}

interface coverArt{
    sources: <sources>([])
}

interface sources{
    url: string
}