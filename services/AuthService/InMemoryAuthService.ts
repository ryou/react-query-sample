import { IAuthService } from './IAuthService'
import { User } from '../../types'
import { delay } from '../../libs/delay'

export class InMemoryAuthService implements IAuthService {
  private token: string | undefined = undefined

  private loginUser: User = {
    id: 'login_user',
    name: 'sample login user',
  }

  async login(params: { email: string; password: string }): Promise<void> {
    await delay(1000)

    this.token = JSON.stringify(params)
  }

  async logout(): Promise<void> {
    await delay(1000)

    this.token = undefined
  }

  async fetchLoginUser(): Promise<User> {
    await delay(1000)

    if (this.token === undefined) throw new Error()

    return this.loginUser
  }

  async editLoginUser({ name }: { name: string }): Promise<void> {
    await delay(1000)

    this.loginUser = {
      ...this.loginUser,
      name,
    }
  }
}
