import "./App.css";
import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from './context/StaticContext'
import Detail from "./pages/Detail";
import {GifsContextProvider} from './context/GifsContext'

function App() {
  return (
    <StaticContext.Provider value={
      {    name:'Henner',
    suscribeteAlCanal:true}
    }>
    <div className="App">
        
      <section className="App-content">
     <GifsContextProvider>
        <Route
   component={Home}
   path="/"
   />      
   <Route
   component={SearchResults}
   path="/search/:keyword/:rating?"
   />

<Route
   component={Detail}
   path="/gif/:id"
   />

<Route
component={()=> <h1>404 Error :(</h1>}
   path="/404"
   />
      </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
