import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { userReducer } from './userReducer'
import { upcomingMoviesReducer } from './upcomingMoviesReducer'
import { favoritesReducer } from './favoritesReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  upcomingMovies: upcomingMoviesReducer,
  favorites: favoritesReducer,
})

export default rootReducer