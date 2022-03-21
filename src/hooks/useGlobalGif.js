

import React, { useContext } from 'react'
import GifsContext from '../context/GifsContext'


const useGlobalGif = () => {
    const {gifs}= useContext(GifsContext)

  return gifs
    
}

export default useGlobalGif