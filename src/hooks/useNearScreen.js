import  { useEffect,useState,useRef } from 'react'


export default function useNearScreen({externalRef,once=true}={}) {
    const elementRef= useRef()
    
    const element=externalRef ? externalRef.current: elementRef.current
    const [isNearScreen, setShow] = useState(false);

    useEffect(() => {
        let observer;

    const onChange=(entries)=>{
        if (entries[0].isIntersecting) {
            
            
            setShow(true)
            once &&  observer.disconnect()
        }else{
            !once && setShow(false)
            setShow(false)

    }

    }
    
    Promise.resolve(
        typeof IntersectionObserver !== 'undefined'
         ? IntersectionObserver : import('intersection-observer')  
    
         ).then(()=>{
             
             observer= new IntersectionObserver(onChange,{
                rootMargin:'100px'
            })
    
            if (element) observer.observe(element)
        })
            
            return ()=> observer && observer.disconnect();
    })
    return {isNearScreen,elementRef};
}
