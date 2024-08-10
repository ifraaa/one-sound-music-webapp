"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    artist: 'WILL I AM',
    title: 'First',
    image: "/assets/a1.jpg", 
  },
  {
    artist: 'WILL I AM',
    title: 'Second Song',
    image: "/assets/a2.jpg",
  },
  {
    artist: 'THE CURE',
    title: 'The Album',
    image: "/assets/a3.jpg",
  },
  {
    artist: 'DJ SMITH',
    title: 'Unplugged',
    image: "/assets/a4.jpg",
  },
  {
    artist: 'THE USTOPABLE',
    title: 'Songs',
    image: "/assets/a5.jpg",
  },
  {
    artist: 'BEYONCE',
    title: 'The Album',
    image: "/assets/a6.jpg",
  },
];
const AlbumList = () => {
  const [albums, setAlbums] = useState(data);

  return (
    <div className="bg-gray-900 py-8 px-4">
    <h1 className="text-3xl font-bold text-gray-300 text-center mb-6">LATEST ALBUMS</h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.map((album, index) => (
        <Link href={`albums/${album.title}`}>

            <li key={index} className="bg-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="w-40 h-40 mb-2 overflow-hidden rounded-full">
              <Image src={album.image} alt={`${album.artist} - ${album.title}`} width={200} height={200} />
            </div>
            <h2 className="text-lg font-semibold mb-2">{album.artist}</h2>
            <p className="text-gray-300">{album.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  </div>
  );
};

export default AlbumList;
