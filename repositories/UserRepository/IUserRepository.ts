import { User } from '../../types'

export type ListUserResponse = {
  users: User[]
  prevPage?: number
  nextPage?: number
}

export interface IUserRepository {
  list(params: { page: number }): Promise<ListUserResponse>

  listAll(): Promise<User[]>

  create(user: Omit<User, 'id'>): Promise<User>

  edit(user: User): Promise<void>

  delete(userId: string): Promise<void>
}
