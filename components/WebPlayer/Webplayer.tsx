import React from 'react'
import { SpotifyEmbed } from 'spotify-embed'
const Webplayer = ({source}) => {
  return (
    <SpotifyEmbed
      src={source}
      className='w-full'
      
    />
  )
}

export default Webplayer