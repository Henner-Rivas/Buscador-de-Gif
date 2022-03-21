import { useGifs } from './useGifs'
import { useEffect, useState } from 'react';
import getSingleGif from '../services/getSingleGif';
 
const useSingleGif = ({id}) => {
const {gifs}= useGifs();

const gifFromCache = gifs.find(singleGif=> singleGif.id === id)

const [gif, setGif] = useState(gifFromCache);
const [isError, setIsError] = useState(false);
const [isLoading, setisLoading] = useState(false);
useEffect(()=>{
    if (!gif) {
        setisLoading(true)
        // Utilizar al servicio si no tenemos gif 
    getSingleGif({id})
      .then(gif =>{
         setGif(gif)
         setisLoading(false)}
        ).catch(err=>{
            setIsError(true)
            setisLoading(false)
        })
    }
},[gif,id])

return {gif,isError,isLoading}
}



export default useSingleGif