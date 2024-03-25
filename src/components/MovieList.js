import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list, handleDelete}) => {
    
  return (
    <div className='movie-list'>  
      { 
      React.Children.toArray(list.map(movie=><MovieCard movie ={ movie } handleDelete={handleDelete}/>))
      }  
    </div>
  )
}

export default MovieList