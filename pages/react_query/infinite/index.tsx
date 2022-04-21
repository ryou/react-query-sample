import { NextPage } from 'next'
import { UserListComponent } from '../../../components/UserListComponent'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import { userRepository } from '../../../factory/singleton'
import { useMemo } from 'react'
import { User } from '../../../types'

const fetchUsers = ({ pageParam = 0 }: { pageParam?: number }) =>
  userRepository.list({ page: pageParam })

const useUserList = () => {
  const queryClient = useQueryClient()
  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery('users', fetchUsers, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })

  const users = useMemo(() => {
    if (data === undefined || data.pages === undefined) return []

    return data.pages.reduce<User[]>(
      (prev, current) => prev.concat(current.users),
      []
    )
  }, [data])

  const isLoadingInitialData = isFetching

  const hasMore = hasNextPage

  const isLoadingMore = isFetchingNextPage

  const loadMore = () => fetchNextPage()

  const clear = async () => {
    await queryClient.resetQueries('users')
  }

  return {
    users,
    loadMore,
    hasMore,
    isLoadingInitialData,
    isLoadingMore,
    isError,
    clear,
  }
}

const ReactQueryInfinitePage: NextPage = () => {
  const { users, isError, hasMore, isLoadingMore, loadMore, clear } =
    useUserList()

  return (
    <div>
      <div>
        <div>
          <UserListComponent users={users} />
          {hasMore && (
            <button onClick={loadMore} disabled={isLoadingMore}>
              more
            </button>
          )}
        </div>
        {isError && <div>error</div>}
        <button onClick={clear}>clear</button>
      </div>
    </div>
  )
}

export default ReactQueryInfinitePage
