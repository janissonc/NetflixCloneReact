import React, { useEffect } from 'react'
import { getmovies } from '../api';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Row.css';


const imageHost ="https://image.tmdb.org/t/p/w300/";

export default function Row({title,path, isLarge}) {

    const [movies,setMovies] = React.useState([]);
    const [scrollX,setScrollX] = React.useState(0);

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

    const handleLeftArrow = ()=>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = movies.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }


  return (
    <div className='movieRow'>
        <h2>{title}</h2>

        <div className='movieRow--left' onClick={handleLeftArrow}>
            <NavigateBeforeIcon style={{fontSize:50}}/>
        </div>
        <div className='movieRow--right' onClick={handleRightArrow}>
            <NavigateNextIcon style={{fontSize:50}}/>
        </div>

        <div className='movieRow--listarea'>

            <div className='movieRow--list' style={{
                marginLeft:scrollX,
                width: movies.length * 150
            }}>
                {movies?.map(movie =>{
                    return(
                        <div className='movieRow--item' key={movie.id}>
                            <img 
                                className={`movie-card ${isLarge && 'movie-card-large'}`} 
                                key={movie.id} 
                                src={`${imageHost}${movie.poster_path}` } 
                                alt={movie.name}/>
                        </div>
                    )
                })}
            </div>  
          
        </div>
    </div>
  )
}
