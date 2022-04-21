import { IUserRepository, ListUserResponse } from './IUserRepository'
import { User } from '../../types'
import { v4 as uuid } from 'uuid'
import { delay } from '../../libs/delay'
import chunk from 'lodash/chunk'

const arrayHasIndex = (index: number, arrayLength: number) => {
  if (index < 0) return false
  if (arrayLength <= index) return false

  return true
}

export class InMemoryUserRepository implements IUserRepository {
  constructor(public users: User[] = []) {}

  async list({ page }: { page: number }): Promise<ListUserResponse> {
    console.log(`call list page ${page}`)
    await delay(2000)

    const splitUsers = chunk(this.users, 5)

    if (!arrayHasIndex(page, splitUsers.length)) throw new Error('')

    const prevPage = page - 1
    const nextPage = page + 1

    return {
      users: splitUsers[page],
      prevPage: arrayHasIndex(prevPage, splitUsers.length)
        ? prevPage
        : undefined,
      nextPage: arrayHasIndex(nextPage, splitUsers.length)
        ? nextPage
        : undefined,
    }
  }

  async listAll(): Promise<User[]> {
    console.log(`call list all`)
    await delay(2000)

    return [...this.users]
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    console.log(`call create ${JSON.stringify(user)}`)
    await delay(2000)

    const id = uuid()
    const newUser = {
      ...user,
      id,
    }

    this.users = this.users.concat([newUser])

    return newUser
  }

  async edit(targetUser: User): Promise<void> {
    await delay(2000)

    let foundUser = false
    this.users = this.users.map((user) => {
      if (user.id === targetUser.id) {
        foundUser = true
        return targetUser
      }

      return user
    })

    if (!foundUser) throw new Error('Edit target user not found.')
  }

  async delete(userId: string): Promise<void> {
    await delay(2000)

    let foundUser = false
    this.users = this.users.filter((user) => {
      if (user.id === userId) {
        foundUser = true
        return false
      }

      return true
    })

    if (!foundUser) throw new Error('Delete target user not found.')
  }
}
