import { User } from '../types'

type Props = {
  users: User[]
}
export const UserListComponent = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
