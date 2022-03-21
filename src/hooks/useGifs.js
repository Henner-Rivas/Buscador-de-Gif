import { useState,useEffect, useContext } from "react";
import getGifs  from "../services/gerGifs";
import GifsContext from '../context/GifsContext'
const INITIAL_PAGE=0;
export  function useGifs({keyword,rating}={keyword:null}) {

    const {gifs,setGifs} = useContext(GifsContext);
    const [loading, setLoading] = useState(false); 
     const [page, setPage] = useState(INITIAL_PAGE);
     const keywordTouse= keyword || localStorage.getItem('lastKeyword')
     const [loadingPage, setLoadingPage] = useState(false); 

    useEffect(() => {
        setLoading(true)
        //recuperamos la keyword del localStorage
        getGifs({ keyword:keywordTouse,rating }).then((gifs) => {

            setGifs(gifs)

                    //guardamos la keyword del localStorage

                    
                    localStorage.setItem('lastKeyword',keyword)
      
      setLoading(false)
  }
      );
      
  }, [keyword,setGifs,keywordTouse,rating]);

  useEffect(()=>{
    if (page===INITIAL_PAGE)return;
    setLoadingPage(true)
   getGifs({keyword:keywordTouse,page,rating}).then(nextGifs => {  
       setGifs(preGifs=>preGifs.concat(nextGifs))
        setLoadingPage(false)
        }
   )


  },[page,keywordTouse,setGifs,rating])

  return{ loading, gifs,loadingPage,setPage}
}