import { InMemoryUserRepository } from '../repositories/UserRepository/InMemoryUserRepository'
import { InMemoryAuthService } from '../services/AuthService/InMemoryAuthService'
import { InMemoryFavoriteRepository } from '../repositories/FavoriteRepository/InMemoryFavoriteRepository'

export const userRepository = new InMemoryUserRepository(
  [...Array(20)].map((_, index) => {
    return {
      id: `${index}`,
      name: `sample user ${index}`,
    }
  })
)

export const favoriteRepository = new InMemoryFavoriteRepository()

export const authService = new InMemoryAuthService()
