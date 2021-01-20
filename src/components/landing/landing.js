import React from 'react';
import axios from "axios";
import Movies from "../Movie/movies";
import {useState, useEffect} from "react";
import {MovieEndpoint,QueryMovieEndpoint} from "../APIs/apiendpoints";


export default function Landing() {
    const [movies, setMovies] = useState([]);
    

  const getData = () => {
  axios.get(`${MovieEndpoint}`).then((res)=>{
    setMovies(res.data.results);
  })
}

  const search = (e) =>{
    if (e.target.value){
      axios.get(`${QueryMovieEndpoint}${e.target.value}`).then((res)=>{
        setMovies(res.data.results);
      })
    }
    else{
      getData();
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <div className="Head">
        <header>
          <input onChange={search} className="search" placeholder="Search..." type="text"/>
        </header>
      </div>
      <div className="MovieApp">
      {Object.keys(movies).map((i)=>(
        <Movies key={i} id={movies[i]} {...movies[i]}/>
      ))}
      </div>
      
    </div>
  );
}
