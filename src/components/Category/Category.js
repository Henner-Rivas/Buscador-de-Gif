import React from 'react'
import { Link } from 'wouter';


const Category = ({name,options=[]}) => {

  return (
      < >
    <h3 className='App-title'>Los gifs mas populares</h3>
   
    <ul>

{
    options.map(popular_gif => ( 
            <li key={popular_gif}>
             <Link to={`search/${popular_gif}`} >
                 Gifs de {popular_gif}
             </Link>
            </li>
    ))
}

    </ul> 
    </>
     )
}

export default Category