const api_key="fpnPJ9WJO2RDTpmO81IcOmzE6Fj2Hp3n&q"

const fromApiResponseToGifs= apiRespose =>{
   const {data}= apiRespose;
   const {images,title,id }= data;
   const {url}= images.downsized_still.url;
   console.log(url)
   return {title,id,url}
}

export default function getSingleGif({id}) {
  let apiURl= `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`;
  return  fetch(apiURl)
    .then(res=> res.json())
    .then(fromApiResponseToGifs)    
}
