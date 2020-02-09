import * as actions from './index'

describe('actions creators', () => {
  test('should return setMovies with the correct object', () => {
    const movies = [
      {
        poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        title : "1917",
        release_date : "2019-12-10",
        vote_average : 8.1,
        overview : "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
        movie_id : 530915
      }
    ]

    const expected = ({
      type: 'SET_MOVIES',
      movies
    })

    const results = actions.setMovies(movies)

    expect(results).toEqual(expected)
  })

  test('should return setFavorites with the correct object', () => {
    const favorites = [
      {
        poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        title : "1917",
        release_date : "2019-12-10",
        vote_average : 8.1,
        overview : "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
        movie_id : 530915
      }
    ]

    const expected = ({
      type: 'SET_FAVORITES',
      favorites
    })

    const results = actions.setFavorites(favorites)

    expect(results).toEqual(expected)
  })
  
  test('should return setUser with the correct object', () => {
    const user = [
      {
        name: 'Hola',
        email: 'hola@email.com',
        password: '123456'
      }
    ]

    const expected = ({
      type: 'SET_USER',
      user
    })

    const results = actions.setUser(user)

    expect(results).toEqual(expected)
  })
  
  test('should return setUpcomingMovies with the correct object', () => {
    const upcomingMovies = [
      {
        poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        title : "1917",
        release_date : "2019-12-10",
        vote_average : 8.1,
        overview : "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
        movie_id : 530915
      }
    ]

    const expected = ({
      type: 'SET_UPCOMING_MOVIES',
      upcomingMovies
    })

    const results = actions.setUpcomingMovies(upcomingMovies)

    expect(results).toEqual(expected)
  })
  
  
})
