import { NextPage } from 'next'
import { ProcessStatus, User } from '../../types'
import { useQuery } from 'react-query'
import { userRepository } from '../../factory/singleton'
import Link from 'next/link'

// -------------------- Hooks --------------------

const queryKey = 'users'

const fetchAll = () => userRepository.listAll()

const useUserList: () => ProcessStatus<User[]> = () => {
  const { isError, data } = useQuery(queryKey, fetchAll)

  if (isError) {
    return {
      status: 'error',
    }
  }

  if (data === undefined) {
    return {
      status: 'processing',
    }
  }

  return {
    status: 'success',
    value: data,
  }
}

// -------------------- View --------------------

type UserListItemComponentProps = {
  user: User
}
const UserListItemComponent = ({ user }: UserListItemComponentProps) => {
  return (
    <Link href={`/scroll_restoration/detail`}>
      <a
        style={{
          display: 'block',
          padding: '20px 10px',
          borderBottom: '1px solid black',
        }}
      >
        ユーザー名：{user.name}
      </a>
    </Link>
  )
}

const UserListComponent = () => {
  const userList = useUserList()

  return (
    <div>
      {userList.status === 'error' ? (
        <div>error</div>
      ) : userList.status === 'processing' ? (
        <div>loading</div>
      ) : (
        userList.value.map((user) => (
          <UserListItemComponent key={user.id} user={user} />
        ))
      )}
    </div>
  )
}

const ScrollRestorationPage: NextPage = () => {
  return (
    <div>
      <h1>スクロール位置復元のサンプル</h1>
      <p>
        ページのコンテンツを通信等非同期に取得するページは、表示時にコンテンツが無いためブラウザのスクロール位置復元機能が動作しない。ReactQueryを使えばキャッシュがあるのでブラウザバックでの表示時点でコンテンツが描画されているのでスクロール位置復元が機能するよというサンプル
      </p>
      <UserListComponent />
    </div>
  )
}

export default ScrollRestorationPage
