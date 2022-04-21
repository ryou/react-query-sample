import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ProcessStatus } from '../../../types'
import { ListUserResponse } from '../../../repositories/UserRepository/IUserRepository'
import { useQuery } from 'react-query'
import { userRepository } from '../../../factory/singleton'
import { UserListComponent } from '../../../components/UserListComponent'
import Link from 'next/link'

// -------------------- Hooks --------------------

const useUserList: (params: {
  page: number
}) => ProcessStatus<ListUserResponse> = ({ page }) => {
  const { isError, data } = useQuery(['users', page], () =>
    userRepository.list({ page })
  )

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

const UserListWithPagerComponent = ({
  processStatus,
  prevUrl,
  nextUrl,
}: {
  processStatus: ProcessStatus<ListUserResponse>
  prevUrl: (prevPageIndex: number) => string
  nextUrl: (nextPageIndex: number) => string
}) => {
  return (
    <div>
      {processStatus.status === 'processing' ? (
        <div>loading</div>
      ) : processStatus.status === 'error' ? (
        <div>error</div>
      ) : (
        <div>
          <UserListComponent users={processStatus.value.users} />
          <div>
            {processStatus.value.prevPage !== undefined && (
              <Link href={prevUrl(processStatus.value.prevPage)}>
                <a>Prev</a>
              </Link>
            )}
            {processStatus.value.nextPage !== undefined && (
              <Link href={nextUrl(processStatus.value.nextPage)}>
                <a>Next</a>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const Content = ({ page }: { page: number }) => {
  const useUserListWithRQResult = useUserList({ page })

  return (
    <div>
      <UserListWithPagerComponent
        processStatus={useUserListWithRQResult}
        prevUrl={(index) => `/react_query/pagination?page=${index}`}
        nextUrl={(index) => `/react_query/pagination?page=${index}`}
      />
    </div>
  )
}

const RQPaginationPage: NextPage = () => {
  const router = useRouter()
  const query = router.query
  const [page, setPage] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (router.isReady) {
      if (query.page !== undefined) {
        setPage(Number(query.page))
      }
    }
  }, [query, router])

  return <div>{page !== undefined && <Content page={page} />}</div>
}

export default RQPaginationPage
