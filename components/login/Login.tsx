"use client"
import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
const LOGIN = () => {
  const router= useRouter()
  const handleSignIN = () => {
    router.push('/sign-in')
  }
  const handleSignUP = () => {
    return(
      router.push('/sign-up')
    )
  }
  return (
    <>
    <div className=" inset-0 z-0 bg-cover bg-center image-back mb-0 " >
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faMicrophone} className="text-black text-xs size-28 mt-8 hover:animate-bounce" />
      </div>
      <h1 className='text-2xl font-medium text-center text-black mt-8'>WELCOME TO</h1><br/>
      <p className='text-7xl font-normal text-center text-black hover:animate-pulse'style={{ fontFamily: 'Satisfy' }}>AudioAura</p>
      <div className="flex flex-col items-center">
      <button className="bg-transparent border border-black text-black font-bold  py-4 px-24 mt-14 rounded-lg transition duration-300 hover:bg-gray-300 hover:text-black" onClick={handleSignIN} >Login</button>
      </div>
      <div className="flex flex-col items-center">
      <button className="bg-black border border-black text-white  font-bold py-4 px-24 mt-14 rounded-lg transition duration-300 hover:bg-gray-300 hover:text-black" onClick={handleSignUP} >Sign-up</button>
      </div>
    </div>
    </>
  )
}

export default LOGIN