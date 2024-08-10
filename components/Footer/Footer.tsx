"use client"
import React from "react";
import { useState, useEffect } from 'react'
const Footer = () => {
    const [isClient, setIsClient] = useState(false)
    const [date,setdate]=useState(new Date().getFullYear())
    useEffect(() => {
        setIsClient(true)
    }, [])
    
return (<>

    <footer className="flex justify-center px-4 text-gray-800 bg-black dark:text-white dark:bg-gray-900">
    <div className="container px-6 py-6">
        <div className="flex flex-col items-center justify-between md:flex-row ml-12">
            <div className="py-1">
            <a href="#">
                <img src="/assets/logo.png" alt=""></img>
            </a>
            <p className="copywrite-text text-xs font-bold py-1"><a href="#">
                Copyright © {date} All rights reserved | This template is made by HASI</a>
            </p>
            </div>

            <div className="flex mr-12">
                <div className="-mx-4 font-bold text-lg">
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Home</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Albums</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Events</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">News</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
                </div>
            </div>
        </div>
    </div>
</footer>
      </>
    )
  }
  
  export default Footer