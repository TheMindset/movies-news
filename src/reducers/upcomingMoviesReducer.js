export const upcomingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_UPCOMING_MOVIES':
      return action.upcomingMovies
    default:
      return state
  }
}