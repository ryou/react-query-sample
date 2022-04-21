import Link from 'next/link'
import { NextPage } from 'next'
import { UserListComponent } from '../../components/UserListComponent'
import { userRepository } from '../../factory/singleton'
import useSWRInfinite from 'swr/infinite'
import { useCallback, useMemo } from 'react'
import { User } from '../../types'

const getKey = (index: number) => {
  return {
    resource: 'users',
    page: index,
  }
}
const fetcher = ({ page }: ReturnType<typeof getKey>) =>
  userRepository.list({ page })

export const useUserList = () => {
  const { data, error, size, setSize, mutate } = useSWRInfinite(getKey, fetcher)

  const users = useMemo(() => {
    if (data === undefined) return []

    return data.reduce<User[]>(
      (prev, current) => prev.concat(current.users),
      []
    )
  }, [data])

  const isLoadingInitialData = !data && !error

  const hasMore = (() => {
    if (data === undefined) return false
    if (data.length === 0) return true

    const lastData = data[data.length - 1]
    return lastData.nextPage !== undefined
  })()

  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')

  const isError = error !== undefined

  const loadMore = useCallback(() => setSize((size) => size + 1), [setSize])

  const refresh = useCallback(() => mutate(), [mutate])

  const clear = useCallback(() => setSize(0), [setSize])

  return {
    users,
    loadMore,
    hasMore,
    isLoadingInitialData,
    isLoadingMore,
    isError,
    refresh,
    clear,
  }
}

const UseSWRInfinitePage: NextPage = () => {
  const {
    users,
    isError,
    hasMore,
    isLoadingInitialData,
    isLoadingMore,
    loadMore,
    clear,
    refresh,
  } = useUserList()

  return (
    <div>
      <div>
        <Link href={`/users/create`}>
          <a>新規作成</a>
        </Link>
      </div>
      <div>
        {isLoadingInitialData ? (
          <div>loading...</div>
        ) : (
          <div>
            <UserListComponent users={users} />
            {hasMore && (
              <button onClick={loadMore} disabled={isLoadingMore}>
                more
              </button>
            )}
          </div>
        )}
        {isError && <div>error</div>}
        <button onClick={clear}>clear</button>
        <button onClick={refresh}>mutate</button>
      </div>
    </div>
  )
}

export default UseSWRInfinitePage
