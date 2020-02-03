import React from 'react'
import { Link } from 'react-router-dom'
import star from '../../images/red-star.svg'


const MovieCard = ({ movie, toggleFavorites }) => {
  const id = movie.movie_id
  return (
    <Link to={`/movie/${id}`}>
      <div className='movie' movie_id={movie.movie_id}>
        <img src={star} 
          className='card-favorite-image' 
          alt='star indicate if the movie is favorite or not' 
          onClick={ (event) => toggleFavorites(event, movie) }
        />

        <img className='card-image' 
          alt="movie poster" 
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
        />

        <div className='card-header'>
          <p>
            {movie.title}
          </p>
        </div>
        <h4 className='card-release-date'>
          {movie.release_date.slice(0, 4)}
        </h4>
      </div>
    </Link>

  )
}

export default MovieCard