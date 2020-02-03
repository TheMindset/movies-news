import React from 'react'

const MoviePage = (movie) => {
  return (
    <div className='movie-page'>
      <img className='movie-image' alt='movie poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <div className='movie-info'>
        <div className='movie-page-title'>Title: { movie.title } </div>
        <div className='movie-page-rating'>Rated: { movie.vote_average } </div>
        <div className='movie-page-overview'> { movie.overview } </div>
        <div className='movie-page-release-date'>Released on  { movie.release_date } </div>
      </div>
    </div>
  )
}

export default MoviePage