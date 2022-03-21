import{API_KEY} from './settings'


export default async function getGifs({keyword='casa'}={}) {
  const apiURl= `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  let response =  await  fetch(apiURl);
  let datos = await response.json();
  let {data}= datos
  console.log(data)

  return data
}
