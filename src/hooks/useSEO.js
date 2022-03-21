import React,{useEffect,useRef} from 'react'

const useSEO = ({title,description}) => {
    const prevTitle= useRef(document.title)
    const prevdescription= useRef(document.querySelector('meta[name=description]').getAttribute('content'))

    useEffect(()=>{

        const previousTitle= prevTitle.current;

        if(title){
            document.title=`${title} | Giffy`


        }
    return () => document.title= previousTitle
    
    },[title])
    
    useEffect(() => {
        const previousDescription = prevdescription.current
        const metaDescrition=document.querySelector('meta[name=description]');
        if (description) {
         metaDescrition.setAttribute('content',description)
        }
        return ()=> metaDescrition.setAttribute('content', previousDescription)
    }, [description]);
      
    }

export default useSEO