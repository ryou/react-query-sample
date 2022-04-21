export interface IFavoriteRepository {
  list(): Promise<string[]>

  add(userId: string): Promise<void>

  delete(userId: string): Promise<void>
}
