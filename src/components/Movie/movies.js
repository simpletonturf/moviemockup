import React,{useContext} from 'react'
import {ImageEndpoint} from "../APIs/apiendpoints";
import add from "../../assets/add.png";
import {WatchlistContext} from "../context/WatchContext";

export default function Movies({title, poster_path,overview, vote_average}){

    const voteClass = (avg) =>{
        if(avg >= 8){
            return "green"
        }
        else if (avg >= 6){
            return "orange"
        }
        else{
            return "red"
        }
    }

    const {watchlist,upWatchlist}=useContext(WatchlistContext);

    return (
        <div>
            <div className="movie">
            <img src={poster_path ? ImageEndpoint+poster_path : 
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBsb2FkaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`avg ${voteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-description">
                <h2>{title}</h2>
                <p>{overview}</p>
                <img onClick={()=>{upWatchlist( prevwatchlist =>[...prevwatchlist,"Hello new context"])}} src={add} title="Add to Watchlist"/>
            </div>
            </div>
        
        </div>
    )
}
