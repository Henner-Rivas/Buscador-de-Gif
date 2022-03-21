import React, { useState,useReducer } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useLocation } from "wouter";
import useForm from "../../hooks/useForm";


const RATINGS = ["g", "pg", "pg-13", "r"];
const SearchForm = ({initialKeyword,initialRating}) => {
  const [path, pushLocation] = useLocation()

/*  /*  const [keyword, setKeyword] = useState(initialKeyword);
  */
  
  const {keyword,times,rating,updateKeyword,updateRating}= useForm({initialKeyword,initialRating});
  const handleSumit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (e) => {
    updateKeyword(e.target.value)
/*     dispatch(
      {type: ACTIONS.UPDATE_KEYWORD,paylod:e.target.value}
    ) */
/*     setTimes(prev =>  prev + 1)
 */  };





 const handleChangeRating=(e)=>{
  updateRating(e.target.value)

 }
  return (
    <>
    <div className="div-from">
      <form onSubmit={handleSumit}>
        <input
          onChange={handleChange}
          type="text"
          value={decodeURI(keyword) }
          placeholder="Buscar en Giffy"
        />
      </form>
      <i>
        <BiSearchAlt onClick={handleSumit} className="btnsearch" />
      </i>

      <select  onChange={handleChangeRating} value={rating} className="select-filter">
        <option disabled> Select type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      
    </div>
    </>
  );
};

export default React.memo(SearchForm);
