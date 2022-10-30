import React, { useEffect } from 'react'
import { getmovies } from '../api';

import './Row.css';


const imageHost ="https://image.tmdb.org/t/p/w500/";

export default function Row({title,path, isLarge}) {

    const [movies,setMovies] = React.useState([]);

    const fetchMovies = async(_path)=>{
        try{
            const data= await getmovies(_path);
            console.log(data)
            setMovies(data?.results);
        }catch(error){
            console.log(`fetchMovies erro: ${error}`)
        }
    }

    useEffect(()=>{
        fetchMovies(path)
    },[path])
  return (
    <div className='row-container'>
        <h2 className='row-header'>{title}</h2>
        <div className='row-cards'>
            {movies?.map(movie =>{
                return(
                    <img 
                        className={`movie-card ${isLarge && 'movie-card-large'}`} 
                        key={movie.id} 
                        src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}` } 
                        alt={movie.name}/>
                )
            })}
        </div>
    </div>
  )
}
