import React from 'react'
import {connect} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies}) => {
  console.log(movies)
  const allMovies = movies.map(movie => <MovieCard movie={movie} key={movie.id} />)

  return (
    <section className='section-movies'>
      {allMovies}
    </section>
  )
}

export default MovieList