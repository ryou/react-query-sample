import { IFavoriteRepository } from './IFavoriteRepository'
import { delay } from '../../libs/delay'

export class InMemoryFavoriteRepository implements IFavoriteRepository {
  constructor(private favorites: string[] = []) {}

  async list(): Promise<string[]> {
    console.log('list favorites')
    await delay(1000)

    return this.favorites
  }

  async add(userId: string): Promise<void> {
    console.log(`add favorite ${userId}`)
    await delay(1000)

    this.favorites = this.favorites.concat([userId])
  }

  async delete(userId: string): Promise<void> {
    console.log(`delete favorite ${userId}`)
    await delay(1000)

    this.favorites = this.favorites.filter((favorite) => favorite !== userId)
  }
}
