"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const data = [
    {
      artist: 'GARRAGE BAND',
      title: 'Radio Station',
      image: "/assets/b1.jpg", // Assign the imported image to the 'image' property
    },
    {
      artist: 'Noises',
      title: 'Bubble gum',
      image: "/assets/b2.jpg",
    },
    {
      artist: 'JESS PARKER',
      title: 'The Album',
      image: "/assets/b3.jpg",
    },
    {
        artist: 'GARRAGE BAND',
        title: 'Radio Station',
        image: "/assets/b1.jpg", // Assign the imported image to the 'image' property
    },
    {
        artist: 'Noises',
        title: 'Bubble gum',
        image: "/assets/b4.jpg",
    },
    {
        artist: 'JESS PARKER',
        title: 'The Album',
        image: "/assets/b3.jpg",
    },
    {
        artist: 'Noises',
        title: 'Bubble gum',
        image: "/assets/b2.jpg",
    },
    {
        artist: 'JESS PARKER',
        title: 'The Album',
        image: "/assets/b3.jpg",
    },
    {
        artist: 'Noises',
        title: 'Bubble gum',
        image: "/assets/b2.jpg",
    },
    {
        artist: 'JESS PARKER',
        title: 'The Album',
        image: "/assets/b4.jpg",
    },
    {
        artist: 'JESS PARKER',
        title: 'The Album',
        image: "/assets/b3.jpg",
    },
    {
        artist: 'Noises',
        title: 'Bubble gum',
        image: "/assets/a2.jpg",
    },
  ];

function WhatsNew() {
    const [NewAlbums, setAlbums] = useState(data);

    return (
      <div className="bg-gray-900 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-300 mb-6">What's New</h1>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {NewAlbums.map((album, index) => (
          <Link href={`albums/${album.title}`}>
  
              <li key={index} className=" p-4 flex flex-col items-left">
              <div className="w-40 h-40 mb-2 overflow-hidden ">
                <Image src={album.image} alt={`${album.artist} - ${album.title}`} width={200} height={200} />
              </div>
              <h2 className="text-lg text-gray-300 font-semibold mb-2 ">{album.artist}</h2>
              <p className="text-gray-600">{album.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
    );
}

export default WhatsNew;