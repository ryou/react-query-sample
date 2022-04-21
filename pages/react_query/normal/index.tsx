import { NextPage } from 'next'
import { ProcessStatus, User } from '../../../types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { userRepository } from '../../../factory/singleton'
import { UserListComponent } from '../../../components/UserListComponent'
import { UserFormComponent } from '../../../components/UserFormComponent'

const fetchAll = () => userRepository.listAll()

const addUser: (user: Omit<User, 'id'>) => Promise<User> = (user) =>
  userRepository.create(user)

const useUserList: () => {
  data: ProcessStatus<User[]>
  createUser: (user: Omit<User, 'id'>) => Promise<void>
} = () => {
  const queryClient = useQueryClient()
  const createUserMutation = useMutation(addUser, {
    onSuccess: async (newUser) => {
      queryClient.setQueryData<User[]>('users', (oldUsers) => {
        if (oldUsers === undefined) {
          return [newUser]
        }

        // ここ、新しいデータを差し込む位置を謝るとinvalidate時にデータの位置が入れ替わってユーザーが混乱する
        return [...oldUsers].concat([newUser])
      })
    },
  })
  const { isError, data } = useQuery(['users'], fetchAll)

  const createUser = async (user: Omit<User, 'id'>) => {
    await createUserMutation.mutateAsync(user)
  }

  if (isError) {
    return {
      data: { status: 'error' },
      createUser,
    }
  }

  if (data === undefined) {
    return {
      data: { status: 'processing' },
      createUser,
    }
  }

  return {
    data: {
      status: 'success',
      value: data,
    },
    createUser,
  }
}

const Content = () => {
  const { data, createUser } = useUserList()

  const onSubmit = async (name: string) => {
    await createUser({ name })
  }

  return (
    <div>
      <h2>ユーザー追加</h2>
      <UserFormComponent onSubmit={onSubmit} />
      <h2>ユーザー一覧</h2>
      {data.status === 'error' ? (
        <div>error</div>
      ) : data.status === 'processing' ? (
        <div>loading</div>
      ) : (
        <UserListComponent users={data.value} />
      )}
    </div>
  )
}

const RQPaginationPage: NextPage = () => {
  return <Content />
}

export default RQPaginationPage
