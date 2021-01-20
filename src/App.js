import './App.css';
import React,{useState} from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./components/landing/landing";
import Watchlist from "./components/watchlist/Watchlist";
import {WatchlistContext} from "./components/context/WatchContext";



function App() {
  const [watchlist, upWatchlist]= useState([]);

  return (
    <Router>
      <div>
        <WatchlistContext.Provider value={{watchlist,upWatchlist}}>
        <Route path="/" exact component={Landing}/>
        <Route path="/watchlist" component={Watchlist}/>
        </WatchlistContext.Provider>
      </div>
    </Router>
  );
}

export default App;
