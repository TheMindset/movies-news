export const setMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
})

export const setFavorites = (id) => ({
  type: 'SET_FAVORITES',
  id
})