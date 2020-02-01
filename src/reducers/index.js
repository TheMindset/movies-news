import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { newUserReducer } from './newUserReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: newUserReducer,
})

export default rootReducer