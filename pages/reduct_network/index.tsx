import { NextPage } from 'next'
import { ProcessStatus, User } from '../../types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { userRepository } from '../../factory/singleton'
import Link from 'next/link'

// -------------------- Hooks --------------------

const fetchAll = () => userRepository.listAll()

const addUser: (user: Omit<User, 'id'>) => Promise<User> = (user) =>
  userRepository.create(user)

export const useUserList: () => {
  data: ProcessStatus<User[]>
  createUser: (user: Omit<User, 'id'>) => Promise<void>
} = () => {
  const queryKey = 'users'
  const queryClient = useQueryClient()
  const createUserMutation = useMutation(addUser, {
    onSuccess: async () => {
      await queryClient.resetQueries(queryKey)
    },
  })
  const { isError, data } = useQuery(queryKey, fetchAll, {
    staleTime: Infinity,
  })

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

// -------------------- View --------------------

type UserListItemComponentProps = {
  user: User
}
const UserListItemComponent = ({ user }: UserListItemComponentProps) => {
  return (
    <div
      style={{
        padding: '20px 10px',
        borderBottom: '1px solid black',
      }}
    >
      ユーザー名：{user.name}
    </div>
  )
}

const UserListComponent = () => {
  const { data } = useUserList()

  return (
    <div>
      {data.status === 'error' ? (
        <div>error</div>
      ) : data.status === 'processing' ? (
        <div>loading</div>
      ) : (
        data.value.map((user) => (
          <UserListItemComponent key={user.id} user={user} />
        ))
      )}
    </div>
  )
}

const ReductNetworkPage: NextPage = () => {
  return (
    <div>
      <h1>通信削減のサンプル</h1>
      <p>
        初期表示後、ユーザー作成画面と行き来しても通信が発生しない。（コンソールの「call
        list all」というログが出ない）
      </p>
      <p>ユーザー作成後invalidateしてるので、最新データ取得のために通信する</p>
      <div>
        <Link href={`/reduct_network/create`}>
          <a>ユーザー作成</a>
        </Link>
      </div>
      <UserListComponent />
    </div>
  )
}

export default ReductNetworkPage
