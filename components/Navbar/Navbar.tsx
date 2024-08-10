'use client'
import Link from 'next/link';
import { useState } from 'react';
import '../Navbar/style.css'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Hamburger from 'hamburger-react'
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <nav className='flex justify-between items-center bg-black opacity-90 p-4 relative z-10 md:justify-around'>
        <Link href={"/home"} className='bg-transparent text-white text-2xl'>ONE SOUND</Link>
        
        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <Hamburger toggle={openDrawer} color='black' />
        </div>
        
        {/* Drawer component for small screens */}
        <Drawer
        placeholder={false}
          placement="right"
          open={isOpen}
          onClose={openDrawer}
          className="p-4 bg-black"
        >
          <div className="mb-6 flex items-center justify-between">
            <IconButton
            placeholder={false}
              variant="text"
              color="blue-gray"
              onClick={openDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          
          {/* Content inside the Drawer */}
          <ul className="flex flex-col text-white">
            <li className="mb-2">
              <Link href="/home">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/playlist">
                Web Player
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/login">
                Pages
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/events">
                Events
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/ContactUs">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <UserButton afterSignOutUrl='/'/>
              </Link>
            </li>
          </ul>
        </Drawer>
        
        {/* Navigation links for larger screens */}
        <div className='hidden md:block'>
          <ul className={`flex nav-links active`}>
            <li>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/playlist">
                Web Player
              </Link>
            </li>
            <li>
              <Link href="/pages">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/Events">
                Events
              </Link>
            </li>
            <li>
              <Link href="/ContactUs">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login">
                <UserButton afterSignOutUrl='/'/>
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
