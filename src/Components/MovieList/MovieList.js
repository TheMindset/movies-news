import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ( { movies, toggleFavorites }) => {
  const allMovies = movies.map(movie => 
    <MovieCard 
      movie={movie} 
      key={Math.random()} 
      toggleFavorites={toggleFavorites} 
    />
  )
  
  return (
    <section className='section-movies'>
      {allMovies}
    </section>
  )
}

export default MovieList