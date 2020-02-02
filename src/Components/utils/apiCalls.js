export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
  
  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

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
  return data.results
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
  const url = `http://localhost:3001/api/v1/users/${userID}/movieFavorites`

  const response = await fetch(url)
  const data = response.json

  return data.favorites
}