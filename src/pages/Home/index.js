import React, { useCallback } from "react";
import Helmet from "react-helmet";
import LisOfGifs from "../../components/LisOfGifs/LisOfGifs";
import SearchForm from "../../components/SearchForm";
import TrendingSearch from "../../components/TrendingSearches";
import { useGifs } from "../../hooks/useGifs";
const Home = () => {

  const { gifs, loading } = useGifs();


  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <div className="div-form-title">
        <div className="div-title">
          <p>Giffy</p>
        </div>

        <SearchForm />
      </div>
      <div className="app-title">
        <p>Ultima busqueda</p>
      </div>
      <div className="container-inicio-trending">
        <div className="container-inicio">
          <LisOfGifs gifs={gifs} />
        </div>
        <TrendingSearch />
      </div>
    </>
  );
};

export default Home;
