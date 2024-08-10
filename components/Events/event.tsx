'use client'
import React from 'react';
import Link from 'next/link';
import { Events } from '@/interface/events'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

// Constants for repeated class names
const fullSizeAbsolute = "absolute top-0 left-0 w-full h-full";
const buttonBaseStyle = "bg-zinc-800 bg-opacity-70 focus:outline-none";
const hoverOpacity = "hover:bg-opacity-100";

// Small components for better readability
const BackgroundImage = ({ imageUrl }) => (
    <div className={`${fullSizeAbsolute} bg-cover bg-center`} style={{ backgroundImage: `url(${imageUrl})` }}></div>
);

const Overlay = () => (
    <div className={`${fullSizeAbsolute} bg-black bg-opacity-50`}></div>
);

const InfoTag = ({ children }) => (
    <span className="m-4 px-4 py-1 text-xs font-semibold text-yellow-300 bg-yellow-800 rounded-full">{children}</span>
);
const NavigationButton = ({ direction, onClick ,children}) => (
    <button
        className={`${buttonBaseStyle} ${direction === 'left' ? 'left-0 ml-4' : 'right-0 mr-4'} top-1/2 transform -translate-y-1/2 ${hoverOpacity}`}
        onClick={onClick}
    >
        {children}
    </button>
);

const ConferenceBanner = () => {
    const [eventData, setEventData] = useState<Events[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-time-events-search.p.rapidapi.com/search-events',
            params: {
                query: 'Concerts in America',
                date: 'today',
                start: '0'
            },
            headers: {
                'X-RapidAPI-Key': 'c5a77051abmshadc8eff1cee4fdfp1883d1jsn9fed63204675',
                'X-RapidAPI-Host': 'real-time-events-search.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setEventData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Fetch data only once when the component mounts

    const navigate = (direction: 'left' | 'right') => {
        if (!eventData) return;

        if (direction === 'left') {
            setCurrentIndex(prevIndex => (prevIndex === 0 ? eventData.length - 1 : prevIndex - 1));
        } else {
            setCurrentIndex(prevIndex => (prevIndex === eventData.length - 1 ? 0 : prevIndex + 1));
        }
    };

    return (
        <div className="relative w-full h-screen bg-black text-white flex justify-between items-center">
            {/* Render background image dynamically */}
            {eventData && eventData[currentIndex] && (
                eventData[currentIndex].thumbnail ?
                <BackgroundImage imageUrl={eventData[currentIndex].thumbnail} />
                : <BackgroundImage imageUrl={"/assets/bg-3.jpg"} />
            )}
            <Overlay />
            <NavigationButton direction="left" onClick={() => navigate('left')} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </NavigationButton>
            <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
                {/* Render dynamic event data */}
                {eventData && eventData[currentIndex] && (
                    <>
                    <div className='bg-lime-700 rounded-lg px-3 py-1'>
                        <span className="text-md uppercase tracking-widest text-white font-semibold">
                            {eventData[currentIndex].start_time}
                        </span>
                        </div>
                        <h1 className="text-4xl font-bold sm:text-6xl">{eventData[currentIndex].name}</h1>
                        <div className='flex'>
                            {
                                eventData[currentIndex].tags.map((tag,index)=>{
                                    return (<InfoTag children={tag}/>)
                                })
                            }
                        </div>


                        <Link href={'https://buy.stripe.com/test_00g7tBfqg7dM2Q0cMN'} className="mt-4 px-8 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300">Book Now</Link>

                    </>
                )}
            </div>
            <NavigationButton direction="right" onClick={() => navigate('right')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </NavigationButton>
        </div>
    );
};

export default ConferenceBanner;

