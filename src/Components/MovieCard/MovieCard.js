import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import star from '../../images/red-star.svg'
import favStar from '../../images/fav-star.svg'

const MovieCard = ({ movie, toggleFavorites, favorites }) => {
  const isFavorite = favorites.map((favMovie) => favMovie.title).includes(movie.title)
  const favImg = isFavorite ? favStar : star;
  const favClass = isFavorite ? 'favorite': ''
  const id = movie.movie_id
  return (
    <Link to={`/movie/${id}`}>
      <div className={`movie ${favClass}`} movie_id={movie.movie_id}>
        <img src={favImg} 
          className='card-favorite-image' 
          alt='star indicate if the movie is favorite or not' 
          onClick={ (event) =>  {
            toggleFavorites(event, movie) 
          }}
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

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export default  connect(mapStateToProps)(MovieCard)