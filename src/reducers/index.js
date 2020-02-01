import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { userReducer } from './userReducer'
import { upcomingMoviesReducer } from './upcomingMoviesReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  upcomingMovies: upcomingMoviesReducer,
})

export default rootReducer