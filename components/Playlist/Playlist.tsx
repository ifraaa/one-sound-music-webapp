"use client";
import { FaSearch } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaEllipsisH } from 'react-icons/fa';
import { FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./playlist.css";
import Link from "next/link";
import { Song } from "@/interface/song";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Hamburger from "hamburger-react";
import { UserButton } from "@clerk/nextjs";
import axios from "axios";
import Webplayer from "../WebPlayer/Webplayer";
import { json } from "stream/consumers";
import { SongDB } from "@/interface/songDB";
import { Playlist_int } from "@/interface/playlist";
import { PlaySongs } from "@/interface/playsongs";


const first = [
  {
    image: "/assets/laal-ishq.jpg",
    name: "laal Ishq",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    image: "/assets/a2.jpg",
    name: "laal Ishq",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a3.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a4.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/laal-ishq.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/laal-ishq.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
];
const second = [
  {
    image: "/assets/a1.jpg",
    name: "9:45",
    artist: "Prabh Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "second",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Excuses",
    image: "/assets/a3.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Summer High",
    image: "/assets/a5.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    image: "/assets/a1.jpg",
    name: "9:45",
    artist: "Prabh Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "second",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Excuses",
    image: "/assets/a3.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Summer High",
    image: "/assets/a5.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
];
const favsongs = [
  {
    image: "/assets/laal-ishq.jpg",
    name: "laal Ishq",
    artist: "Arijit Singh",
  },
  {
    name: "Summer High",
    image: "/assets/a5.jpg",
    artist: "AP Dhillon",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
  },
];

function Playlist() {
  const [uri, setUri] = useState("spotify:track:3B4etxytImrRKQgV3XHjnR");
  const [Data, setData] = useState<Song[]>([]);
  const [recentlyplayed, setRecentlyPlayed] = useState<SongDB[]>([]);
  const [search, setSearch] = useState("");
  const [likedSongs, setLikedSongs] = useState<SongDB[]>([]);
  const [likedSongsClicked, setLikedSongsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [playlists,setPlaylists]= useState<Playlist_int[]>([]);
  const [CurrentPlaylist,setCurrentPlaylist] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState<PlaySongs[]>([]);
  const [song,SetSong] = useState({
    uri: "",
    name: "",
    artist: "",
    album: "",
    duration:0
  })

  const [isAddPl, setAddPl] = useState(false);
  const [isCrtPl, setCrtPl] = useState(false);
  const [playName, setPlayName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPlaylistOpen,setPlaylistOpen] = useState(false);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddPlaylist = async () => {
    try {
      const response = await axios.post('/api/playlist', { name: inputValue });
      console.log('Playlist created:', response.data);
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
    setCrtPl(false);
    fetchPlaylist();
  };

  const AddtoPlaylist = async(playlist) =>
  {
    await axios.post("/api/playlistSongs", {
      uri: song.uri,
      name: song.name,
      artist: song.artist,
      album: song.album,
      duration: song.duration,
      playlist: playlist
    })
    setAddPl(false);
    setIsModalOpen(false);
  }

  const fetchPlaylistSongs = async () => {
    try {
      const response = await axios.get(`/api/playlistSongs?name=${CurrentPlaylist}`);
      console.log("PLaylistSongs : ",response.data.body);
      setPlaylistSongs(response.data.body);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  const fetchPlaylist = async () => {
    try {
      const response = await axios.get("/api/playlist");
      console.log("PLaylists : ",response.data.body);
      setPlaylists(response.data.body);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  const fetchdata = async () => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: search,
        type: "tracks",
        offset: "0",
        limit: "30",
      },
      headers: {
    'x-rapidapi-key': '9dfee87afamsh6f2d236154b471ap1e8615jsndc5364338cc2',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
      
    };
    setLikedSongsClicked(false);
    setPlaylistOpen(false);
    const response = await axios
      .request(options)
      .then(function (response) {
        setData(response.data.tracks.items);
      })
      .catch(function (error) {
        console.error(error);
      });
      setSearchOpen(true);
  };
  const fetchRecentlyPlayed = async () => {
    await axios.get("/api/recentlyplayed").then((response) => {
      console.log(response.data.body)
      setRecentlyPlayed(response.data.body);
    })
  }
  useEffect(() => {   
    fetchdata();
  }, []);

  useEffect(() => {
   fetchRecentlyPlayed();
   }, []);

  useEffect(() => {
    fetchLikedSongs();
  }, []);

  useEffect(()=> {
    setLikedSongsClicked(true)
  },[])


  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Hamburger clicked!");
    setIsOpen((prev) => !prev);
  };
  function formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const paddedSeconds = seconds.toString().padStart(2, "0");

    return `${minutes}:${paddedSeconds}`;
  }
  const fetchLikedSongs = async () => {
    try {
      const response = await axios.get("/api/likedsongs");
      setLikedSongs(response.data.body);
    } catch (error) {
      console.error("Error fetching liked songs:", error);
    }
  };

  //console.log(likedSongs)
  //console.log("LikedSongsClicked:", likedSongsClicked);
  
  useEffect( () =>
    {
      fetchPlaylist();
    },[])

  
  return (
    <>
      <div className=" sidebar fixed overflow-y-scroll inset-y-0 left-32 top-20 bg-gray-900 w-3/5 h-full z-10 ">
        <div className="sticky top-0 rounded-lg ">
          <Webplayer source={uri} />
        </div>
        <div className="ml-4 mr-4 mb-4 ">
          <div className="bg-gray-900 rounded-t-lg shadow">
            <div className="grid grid-cols-12 text-l  text-white p-4">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Title</div>
              <div className="col-span-3 ">Album</div>
              <div className="col-span-1">Duration</div>
            </div>
          </div>
          <div className="bg-gray-900 pb-20 rounded-b-lg shadow ">
            { isSearchOpen /*!likedSongsClicked*/ && Data.map((song, index) => {
              const isLiked = likedSongs.some(songDB => songDB.uri === song.data.uri);
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 text-sm text-gray-300 hover:bg-gray-700 py-4 items-center"
                >
                  <div className="col-span-1">{index+1}</div>
                  <div className="col-span-4 flex items-center">
                    <img
                      src={song.data.albumOfTrack.coverArt.sources[0].url}
                      alt={song.data.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <div className="font-medium mr-6">{song.data.name}</div>
                    </div>
                  </div>
                  <div className="col-span-3 mr-6">
                    {song.data.albumOfTrack.name}
                  </div>
                  <div className=" ml-2 col-span-2">
                    {formatDuration(song.data.duration.totalMilliseconds)}
                  </div>
                  <div className="col-span-2 flex justify-center">
                  <button
                    className="bg-white w-6 h-6 flex items-center justify-center rounded-full  mr-4 shadow-md"
                    onClick={async (e) => {
                      e.preventDefault();
                      setUri(song.data.uri)
                      axios.post("/api/recentlyplayed", {
                        uri: song.data.uri,
                        name: song.data.name,
                        album: song.data.albumOfTrack.name,
                        artist: song.data.albumOfTrack.coverArt.sources[0].url,
                        duration: song.data.duration.totalMilliseconds
                      })
                          fetchRecentlyPlayed();
                    }}
                  >
                    <FaPlay className="text-gray-900 text-xs" />
                  </button>
                  <button
                  className={`w-6 h-6 text-red-500 mr-4 ${
                    likedSongs.some(songDB => songDB.uri === song.data.uri) ? 'fill-current' : ''
                  }`}
                  onClick={async (e) => {
                    e.preventDefault();
                    //setUri(song.data.uri);
                    try {
                      const likedSongIndex = likedSongs.findIndex(songDB => songDB.uri === song.data.uri);
                      if (likedSongIndex !== -1) {
                        // If the song is already liked, send a DELETE request to remove it
                        await axios.delete("/api/likedsongs", {
                          data: { uri: song.data.uri }
                        });
                        // Update the likedSongs state to remove the deleted song
                        const updatedLikedSongs = [...likedSongs];
                        updatedLikedSongs.splice(likedSongIndex, 1);
                        setLikedSongs(updatedLikedSongs);
                      } else {
                        // If the song is not liked, send a POST request to add it
                        await axios.post("/api/likedsongs", {
                          uri: song.data.uri,
                          name: song.data.name,
                          artist: song.data.albumOfTrack.coverArt.sources[0].url,
                          album: song.data.albumOfTrack.name,
                          duration: song.data.duration.totalMilliseconds
                        });
                        // Update the likedSongs state to include the newly added song
                        setLikedSongs([...likedSongs, {
                          uri: song.data.uri,
                          name: song.data.name,
                          artist: song.data.albumOfTrack.coverArt.sources[0].url,
                          album: song.data.albumOfTrack.name,
                          duration: song.data.duration.totalMilliseconds
                        }]);
                      }
                    } catch (error) {
                      console.error("Error toggling like:", error);
                    }
                  }}
                    >    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="red"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill={isLiked ? "red" : "none"}
                        d={
                          isLiked
                            ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            : "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        }
                      />
                    </svg>
                  </button>
                  <button
                      className="bg-white  w-6 h-6 flex items-center justify-center rounded-full shadow-md"
                      onClick={() => {
                        setIsModalOpen(true);
                        SetSong({
                          uri: song.data.uri,
                          name: song.data.name,
                          artist:  song.data.albumOfTrack.coverArt.sources[0].url,
                          album: song.data.albumOfTrack.name,
                          duration: Number(song.data.duration.totalMilliseconds)
                        });
                      }}
                    >
                      <FaEllipsisH className="text-gray-900 text-xs" />
                    </button>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     {/*    
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/3 relative">
            <button
              className="absolute top-2 right-2"
              onClick={()=>setIsModalOpen(false)}
            >
              <FaTimes className="text-gray-500 hover:text-gray-700 transition duration-300" />
            </button>
            <div>
              <p className="text-lg font-semibold mb-4">Options</p>
              <div onClick={()=>setAddPl(true)}>
                { isAddPl ? (
                    <ul className="z-55">
                      {
                      playlists.map((playlist) => (
                      <li className="py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 cursor-pointer" onClick={()=>AddtoPlaylist(playlist.title)}>
                        {playlist.title}
                      </li>)
                      )}
                    </ul>
                  ):(<p className="py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer">Add to playlist</p>)
                }
              </div>
              <div
                className="py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer"
                onClick={() => {
                }}
              >
                Create new playlist
              </div>
            </div>
          </div>
        </div>
      )}
    */}
      
       <div
        className={`sidebar fixed  top-10 left-0 h-screen text-white overflow-y-auto  transition-all duration-900 ease-in-out z-20 ${
          isOpen ? "w-64" : "w-30"
        }`}
      >
        <h1 className="pl-5">Your playlists</h1>

        <ul className={` bg-black mt-4 pb-10 ${isOpen ? "pl-5" : "pl-2"}`}>
          <div className="bg-black  top-0 left-0 p-2">
            <Hamburger toggled={isOpen} toggle={toggleSidebar} color="white" />
          </div>
          <li className="mb-2 flex items-center">
              <div onClick={() => {
                    console.log("Clicked!"); 
                    setLikedSongsClicked(true);
                    setSearchOpen(false);
                    setPlaylistOpen(false);
                  }}  className="flex items-center">
                <img
                  src="/assets/a10.jpg" 
                  alt="Liked Songs"
                  className="block w-20 h-20 object-cover mr-6"
                />
                {isOpen && (
                  <div>
                    <p className="text-sm">Liked Songs</p>
                    <p className="text-xs text-gray-400">{likedSongs.length} songs</p>
                  </div>
                )}
              </div>
          </li>
          {playlists.map((playlist, index) => (
            <li key={index} className="mb-2 flex items-center" onClick={()=> {setCurrentPlaylist(String(playlist.title));fetchPlaylistSongs();setPlaylistOpen(true);setSearchOpen(false);setLikedSongsClicked(false)}}>
              
                <img
                  src={String(playlist.img)}
                  alt={String(playlist.title)}
                  className="block w-20 h-20 object-cover mr-6"
                />
              {isOpen && (
                  <div>
                    <p className="text-sm">{playlist.title}</p>
                  </div>
              )}
            </li>
          ))}
        </ul>
       </div>

      { likedSongsClicked && likedSongs.length > 0 && (
        <div className=" sidebar fixed overflow-y-scroll inset-y-0 left-32 top-20 bg-gray-900 w-3/5 h-full z-10 ">
        <div className="sticky top-0 rounded-lg">
          <Webplayer source={uri} />
        </div>

        <div className="ml-4 mr-4 mb-4 ">
          <div className="bg-gray-900 rounded-t-lg shadow">
            <div className="grid grid-cols-12 text-l  text-white p-4">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Title</div>
              <div className="col-span-3 ">Album</div>
              <div className="col-span-1">Duration</div>
            </div>
          </div>
  <div className="bg-gray-900 pb-20 rounded-b-lg shadow ">
  {likedSongs.map((song, index) => {
  const isLiked = likedSongs.some(songDB => songDB.uri === song.uri);
  return (
    <div
      key={index}
      className="grid grid-cols-12 text-sm text-gray-300 hover:bg-gray-700 py-4 items-center"
    >
      <div className="col-span-1">{index+1}</div>
      <div className="col-span-4 flex items-center">
        <img
          src={song.artist}
          alt={song.name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <div className="font-medium mr-6">{song.name}</div>
        </div>
      </div>
      <div className="col-span-3 mr-6">
        {song.album}
      </div>
      <div className=" ml-2 col-span-2">
        {formatDuration(song.duration)}
      </div>
      <div className="col-span-2 flex justify-center">
      <button
        className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow-md mr-4"
        onClick={async (e) => {
          e.preventDefault();
          setUri(song.uri)
          axios.post("/api/recentlyplayed", {
            uri: song.uri,
            name: song.name,
            album: song.album,
            artist: song.artist,
            duration: song.duration
          });
          fetchRecentlyPlayed();
        }}
      >
        <FaPlay className="text-gray-900 text-xs" />
      </button>
      <button
      className={`w-6 h-6 mr-4 text-red-500 ${
        likedSongs.some(songDB => songDB.uri === song.uri) ? 'fill-current' : ''
      }`}
      onClick={async (e) => {
        e.preventDefault();
        setUri(song.uri);
        try {
          const likedSongIndex = likedSongs.findIndex(songDB => songDB.uri === song.uri);
            await axios.delete("/api/likedsongs", {
              data: { uri: song.uri }
            });

            const updatedLikedSongs = [...likedSongs];
            updatedLikedSongs.splice(likedSongIndex, 1);
            setLikedSongs(updatedLikedSongs);
          } 
       catch (error) {
          console.error("Error toggling like:", error);
        }
      }}
        >    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            stroke="red"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill={isLiked ? "red" : "none"}
            d={
              isLiked
                ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                : "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            }
          />
        </svg>
      </button>
      <button
        className="bg-white  w-6 h-6 flex items-center justify-center rounded-full shadow-md "
         onClick={() => {
            setIsModalOpen(true);
            SetSong({
              uri: song.uri,
              name: song.name,
              artist: song.artist,
              album: song.album,
              duration: Number(song.duration)
            });
          }}
          >
         <FaEllipsisH className="text-gray-900 text-xs" />
        </button>
        </div>
    </div>
  );
  })}
  </div>
  </div>
  </div>
          )
      } 

{ isPlaylistOpen && (
        <div className=" sidebar fixed overflow-y-scroll inset-y-0 left-32 top-20 bg-gray-900 w-3/5 h-full z-10 ">
        <div className="sticky top-0 rounded-lg">
          <Webplayer source={uri} />
        </div>

        <div className="ml-4 mr-4 mb-4 ">
          <div className="bg-gray-900 rounded-t-lg shadow">
            <div className="grid grid-cols-12 text-l  text-white p-4">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Title</div>
              <div className="col-span-3 ">Album</div>
              <div className="col-span-1">Duration</div>
            </div>
          </div>
  <div className="bg-gray-900 pb-20 rounded-b-lg shadow ">
  {playlistSongs.map((song, index) => {
  const isLiked = likedSongs.some(songDB => songDB.uri === song.uri);
  return (
    <div
      key={index}
      className="grid grid-cols-12 text-sm text-gray-300 hover:bg-gray-700 py-4 items-center"
    >
      <div className="col-span-1">{index+1}</div>
      <div className="col-span-4 flex items-center">
        <img
          src={song.artist}
          alt={song.name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <div className="font-medium mr-6">{song.name}</div>
        </div>
      </div>
      <div className="col-span-3 mr-6">
        {song.album}
      </div>
      <div className=" ml-2 col-span-2">
        {formatDuration(song.duration)}
      </div>
      <div className="col-span-2 flex justify-center">
      <button
        className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow-md mr-4"
        onClick={async (e) => {
          e.preventDefault();
          setUri(song.uri)
          axios.post("/api/recentlyplayed", {
            uri: song.uri,
            name: song.name,
            album: song.album,
            artist: song.artist,
            duration: song.duration
          });
          fetchRecentlyPlayed();
        }}
      >
        <FaPlay className="text-gray-900 text-xs" />
      </button>
      <button
      className={`w-6 h-6 mr-4 text-red-500 ${
        likedSongs.some(songDB => songDB.uri === song.uri) ? 'fill-current' : ''
      }`}
      onClick={async (e) => {
        e.preventDefault();
        setUri(song.uri);
        try {
          const likedSongIndex = likedSongs.findIndex(songDB => songDB.uri === song.uri);
            await axios.delete("/api/likedsongs", {
              data: { uri: song.uri }
            });

            const updatedLikedSongs = [...likedSongs];
            updatedLikedSongs.splice(likedSongIndex, 1);
            setLikedSongs(updatedLikedSongs);
          } 
       catch (error) {
          console.error("Error toggling like:", error);
        }
      }}
        >    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            stroke="red"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill={isLiked ? "red" : "none"}
            d={
              isLiked
                ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                : "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            }
          />
        </svg>
      </button>
      <button
        className="bg-white  w-6 h-6 flex items-center justify-center rounded-full shadow-md "
         onClick={() => {
            setIsModalOpen(true);
            SetSong({
              uri: song.uri,
              name: song.name,
              artist: song.artist,
              album: song.album,
              duration: Number(song.duration)
            });
          }}
          >
         <FaEllipsisH className="text-gray-900 text-xs" />
        </button>
        </div>
    </div>
  );
  })}
  </div>
  </div>
  </div>
          )
      } 




      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/3 relative">
            <button
              className="absolute top-2 right-2"
              onClick={()=>setIsModalOpen(false)}
            >
              <FaTimes className="text-gray-500 hover:text-gray-700 transition duration-300" />
            </button>
            <div>
              <p className="text-lg font-semibold mb-4">Options</p>
              <div onClick={()=>setAddPl(true)}>
                { isAddPl ? (
                    <ul className="z-55">
                      {
                      playlists.map((playlist) => (
                      <li className="py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 cursor-pointer" onClick={()=>AddtoPlaylist(playlist.title)}>
                        {playlist.title}
                      </li>)
                      )}
                    </ul>
                  ):(<p className="py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer">Add to playlist</p>)
                }
              </div>
              <div onClick={()=>setCrtPl(true)}>
                { isCrtPl ? (
                   <div className="flex items-center space-x-2">
                   <input 
                     type="text" 
                     value={inputValue} 
                     onChange={handleInputChange} 
                     className="py-2 px-4 rounded-md border border-gray-300"
                   />
                   <button 
                     onClick={handleAddPlaylist} 
                     className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                   >
                     Add
                   </button>
                 </div>
                  ):(<p className="py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer">Create playlist</p>)
                }
              </div>
            </div>
          </div>
        </div>
        )
      }

      <div className="sidebar fixed top-20 right-0 h-full bg-gray-900 text-white overflow-y-auto z-10 w-[30vw]">
        <div className="flex items-center w-full h-10 bg-gray-500 rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-grow h-full px-3 text-black bg-transparent focus:outline-none"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value) }
          />
          <div
            className="h-full px-3 flex items-center justify-center bg-gray-600 text-gray-300 cursor-pointer"
            onClick={fetchdata }
          >
            <FaSearch/>
          </div>
        </div>
        <h2 className="p-4 text-xl font-bold">Recently Played</h2>
        <ul>
          {recentlyplayed.map((song, index) => (
            <li
              key={index}
              className="flex items-center  p-4 border-b border-gray-800"
              onClick={async (e) => {
                e.preventDefault();
                setUri(song.uri)
                fetchRecentlyPlayed()
              }}
            >
              <img
                src={song.artist}
                alt={song.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="flex items-center">
                <div>
                  <p className="text-s pr-12">{song.name}</p>
                  {/*<p className="text-xs">{song.album}</p>*/}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Playlist;