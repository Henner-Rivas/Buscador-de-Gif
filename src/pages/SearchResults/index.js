import React, { useEffect, useRef, useCallback } from "react";
import LisOfGifs from "../../components/LisOfGifs/LisOfGifs"
import {useGifs} from "../../hooks/useGifs"
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import useTitle from "../../hooks/useTitle";
import Helmet from "react-helmet";
import SearchForm from "../../components/SearchForm";
export default function SearchResults({ params }) {
  const { keyword,rating='g' } = params;
  const externalRef= useRef()
  const {loading,gifs,setPage}= useGifs({keyword,rating})

  const {isNearScreen}= useNearScreen({externalRef: loading ? null:externalRef, once:false })  



const  title= gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}`: loading ? 'Cargando' : ''; 


const debounceHandleNextpage = useCallback(debounce(()=> 
setPage(prevPage=> prevPage+1)
,1000),[])   

useEffect(()=>{
  if (isNearScreen) {
    debounceHandleNextpage()
  }
},[debounceHandleNextpage,isNearScreen])



  return (
    <>
    <Helmet>
  <title> {title}  </title>
    </Helmet>

    <div className="div-form-title">
        <div className="div-title">
          <p>Giffy</p>
        </div>

        <SearchForm initialKeyword={keyword} initialRating={rating}/>
      </div>
        <h3 className='App-title'>{decodeURI(keyword)} </h3>
        <div className="container-inicio">
      <LisOfGifs gifs={gifs}  />
</div>
    <div id="visor" ref={externalRef}> </div>
{/*       <button onClick={handleNextpage}>Get next page </button>
 */}    </>
  );
}
