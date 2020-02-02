import React from 'react'
import star from '../../images/red-star.svg'


const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
      <img src={star} className='card-favorite-image' alt='star indicate if the movie is favorite or not' />

      <img className='card-image' alt="movie poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <div className='card-header'>
        <p>
          {movie.title}
        </p>
      </div>
      <h4 className='card-release-date'>
        {movie.release_date.slice(0, 4)}
      </h4>
    </div>
  )
}

export default MovieCard