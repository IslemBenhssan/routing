import React from 'react'
import StartRating from './StartRating'
import { Link } from 'react-router-dom'

const MovieCard = ({movie,handleDelete}) => {
    
  return (
    <div className='movie-card'>
        <h3> {movie.name}</h3>
        <img src={movie.image} alt={movie.name}/>
        <p> {movie.rating}</p>
        <p>{movie.date}</p>
        <StartRating rating={movie.rating}/>

        <div>
       
          

            <button className="btn"onClick={()=>handleDelete(movie.id)} >Delete</button>
        </div>
        <Link to={`/info/${movie.id}`}>
        <button className='btn'>more info </button>
        </Link>
        
        
    </div>
  )
}

export default MovieCard