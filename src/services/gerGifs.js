const api_key="fpnPJ9WJO2RDTpmO81IcOmzE6Fj2Hp3n&q"



export default function getGifs({keyword='casa',limit=20,page=0,rating="g"}={}) {
  let apiURl= `https://api.giphy.com/v1/gifs/search?api_key=${api_key}=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=en`;
  return  fetch(apiURl)
    .then(res=> res.json())
    .then(response=>{
        const {data}= response;
            const gifs= data.map(gif=>{
                const {title, id}=gif;
               
              const url= gif.images.downsized_still.url;

              return{title,id,url}
            })  
    return gifs
        })    
}