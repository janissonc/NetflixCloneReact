import React, { useEffect } from 'react'
import categories, { getmovies } from '../api'
import './Banner.css'


export default function Banner() {
    const [movie,setMovie] = React.useState({})

    const fetchRandomMovie = async ()=>{
        try{
            const netflixoriginalsCategory = categories.find((category)=>category.name === "netflixOriginals");
            console.log(netflixoriginalsCategory)
            const data = await getmovies(netflixoriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length)
            
            setMovie(movies[randomIndex])

        }catch(error){
            console.log(`fetchRandomMovie error: `,error)
        }
    }

    useEffect(()=>{
        fetchRandomMovie()
    },[]);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

  return (
    <header className='banner-container' style={{
        backgroundSize:'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        roundPosition: 'center-center'
        }}>
        <div className='banner-content'>
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner-button-container'>

                <button className='banner-button'>
                    Assistir
                </button>
                <button className='banner-button'>
                    Minha Lista
                </button>
            </div>
            <div className='banner-description'>
                <h2>{truncate(movie?.overview,200)}</h2>
            </div>

        </div>
    </header>
  )
}
