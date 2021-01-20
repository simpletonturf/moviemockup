import React,{useContext} from 'react'
import {WatchlistContext} from "../context/WatchContext";

export default function Watchlist() {
    const {watchlist,upWatchlist}=useContext(WatchlistContext);
    return (
        <div>
            HELLO<br/>
            {watchlist}
            <button onClick={()=>{upWatchlist( prevwatchlist =>[...prevwatchlist,"Hello new context"])}}>Add</button>
        </div>
    )
}
