import React from 'react'


const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
      <img className='card-image' alt="movie poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <h2 className='card-header'>
        {movie.title}
      </h2>
      <h4 className='card-release-date'>
        {movie.release_date.slice(0, 4)}
      </h4>
    </div>
  )
}

export default MovieCard