import React from 'react'


const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
      <div>
        {movie.title}
      </div>
      <img className='card_image' alt="movie poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <div className='card-release-date'>
        {movie.release_date.slice(0, 4)}
      </div>
    </div>
  )
}

export default MovieCard