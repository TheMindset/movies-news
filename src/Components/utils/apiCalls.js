export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
  
  const response = await fetch(url)
  const data = await response.json()
  return cleanMovieData(data.results)
}

const cleanMovieData = (data) => data.map(movie => ({
  poster_path: movie.poster_path,
  title: movie.title,
  release_date: movie.release_date,
  vote_average: movie.vote_average,
  overview: movie.overview,
  movie_id: movie.id
}))

export const createNewUser = async (user) => {
  const url = 'http://localhost:3001/api/v1/users'
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)

  if (!response.ok) {
    if (response.status === 500) {
      throw Error('This email has already been used')
    }
  }
  return response.json()
}

export const getUpcomingMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
  
  const response = await fetch(url)
  const data = await response.json()
  return cleanMovieData(data.results)
}

export const loginUser = async (user) => {
  const url = 'http://localhost:3001/api/v1/login'

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)
  
  if (!response.ok) {
    if (response.status === 500) {
      throw Error('Email or password incorrect')
    }
  }

  return response.json()
}

export const getUserFavorites = async (userID) => {
  const url = `http://localhost:3001/api/v1/users/${userID}/moviefavorites`

  const response = await fetch(url)
  if (!response.ok) {
    throw Error('Something goes wrong! Unable to get favorites')
  }
  const data = await response.json()

  return data.favorites
}

export const postFavorite = async (userID, movie) => {
  console.log(movie)
  const url = `http://localhost:3001/api/v1/users/${userID}/moviefavorites`

  const options = {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    throw Error('Something happen! Could not add favorite movie')
  }
}

export const deleteFavorite = async (userID, movie_id) => {
  const url = `http://localhost:3001/api/v1/users/${userID}/moviefavorites/${movie_id}`

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    throw Error('Something happen! Could not remove favorite movie')
  }
}