import React, { useEffect } from 'react'
import categories, { getmovies } from '../api'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Banner.css'


export default function Banner() {
    const [movie,setMovie] = React.useState({})
    
    const fetchRandomMovie = async ()=>{
        try{
            const netflixoriginalsCategory = categories.find((category)=>category.name === "netflixOriginals");
            console.log("netflixoriginalsCategory",netflixoriginalsCategory)
            const data = await getmovies(netflixoriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length)
            
            setMovie(movies[randomIndex])
            
            console.log(movies[randomIndex])
        }catch(error){
            console.error(`fetchRandomMovie error: `,error)
        }
    }

    useEffect(()=>{
        fetchRandomMovie()
    },[]);
    let firstDate = new Date(movie.first_air_date)

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

  return (
        <section className='featured' style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: 'center'
            }}>

            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </div>
                    <div className='featured--info'>
                        <div className='featured--points'>
                            {movie?.vote_average}
                        </div>
                        <div className='featured--year'>
                            {firstDate.getFullYear()}
                        </div>
                    </div>
                    <div className='featured--description'>
                    <h2>{truncate(movie?.overview,100)}</h2>
                    </div>
                    <div className='featured--buttons'>

                        <a href="" className='featured--watchbutton'>
                            Assistir
                        </a>
                        <a href="" className='featured--mylistbutton'>
                            Minha Lista
                        </a>
                    </div>
                </div>
               

            </div>
        </section>
  )
}
