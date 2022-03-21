import React, { useEffect,useState } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService'
import Category from '../Category/Category';



export default function TrendingSearch() {
    const [trends, setTrends] = useState([]);
  useEffect( function() {
  
  getTrendingTerms().then(setTrends)
  /*   return () => {
      second
  } */
  }, [])
  
  
      return (<Category options={trends} name='Tendencias' />  )
  }