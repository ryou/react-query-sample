import { User } from '../../types'

export interface IAuthService {
  login(params: { email: string; password: string }): Promise<void>

  logout(): Promise<void>

  fetchLoginUser(): Promise<User>

  editLoginUser(params: { name: string }): Promise<void>
}
