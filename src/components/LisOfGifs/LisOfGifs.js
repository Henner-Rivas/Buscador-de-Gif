
import React from 'react'
import Gif from '../Gif/Gif'

const LisOfGifs = ({gifs}) => {
  return (
    <>
    
    {gifs.map(({ id, title, url }) => (
        <div className='contenedor-gif' key={id}> 
        <Gif  title={title} url={url} id={id} />
        </div>
      ))}
    </>  )
}

export default LisOfGifs