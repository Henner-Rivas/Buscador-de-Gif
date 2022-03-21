import React,{useReducer} from "react"


const useForm=({initialKeyword,initialRating})=>{
    const ACTIONS= {
      UPDATE_KEYWORD:'update_keyword',
      UPDATE_RATING:'update_rating'
    }
  
  
  
    const reducer= (state,action)=>{
      switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
         return {
           ...state,
           keyword:action.paylod,
           times:state.times + 1
         }
         case ACTIONS.UPDATE_RATING:
           return {
             ...state,
             rating:action.paylod,
           }
        default:
          return state
      }
     }
  
     const [state,dispatch] = useReducer(reducer,{
      keyword:initialKeyword,
      rating:initialRating,
      times:0
    });
    
     const {keyword,times,rating }=state;
     return{
       keyword,
       rating,
       times,
       updateKeyword:keyword => dispatch({type:ACTIONS.UPDATE_KEYWORD,paylod:keyword}),
       updateRating:rating => dispatch({type:ACTIONS.UPDATE_RATING,paylod:rating})
  
      }
  
  }

  export default useForm