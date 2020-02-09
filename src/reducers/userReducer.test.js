import { userReducer } from './userReducer'
import { setUser } from '../actions/index'

describe('favoritesReducer', () => {
  test('should return the initial state', () => {
    const expected = {}
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  test('should return a state with new favorites', () => {
    const expected = [
      {
        name: 'Hola',
        email: 'hola@test.com',
        password: '123456'
      }
    ]
    
    const result = userReducer([], setUser(expected))
  
    expect(result).toEqual(expected)
  })
})
