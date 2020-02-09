import { favoritesReducer } from './favoritesReducer'
import { setFavorites } from '../actions/index'

describe('favoritesReducer', () => {
  test('should return the initial state', () => {
    const expected = []
    const result = favoritesReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  test('should return a state with new favorites', () => {
    const expected = [
      {
        poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        title : "1917",
        release_date : "2019-12-10",
        vote_average : 8.1,
        overview : "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
        movie_id : 530915
      }, {
        poster_path: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        title: "Sonic the Hedgehog",
        release_date: "2020-02-12",
        vote_average: 7,
        overview: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
        movie_id: 454626
      }
    ]
    
    const result = favoritesReducer([], setFavorites(expected))
  
    expect(result).toEqual(expected)
  })
})
