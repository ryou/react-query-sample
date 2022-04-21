import { NextPage } from 'next'
import { ProcessStatus, User } from '../../types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { favoriteRepository, userRepository } from '../../factory/singleton'
import { useCallback, useEffect, useMemo, useState } from 'react'

// -------------------- Favorite Hooks --------------------

const fetchFavorites = () => favoriteRepository.list()

const addFavorite = (id: string) => favoriteRepository.add(id)

const deleteFavorite = (id: string) => favoriteRepository.delete(id)

const useFavorites: () => {
  data: ProcessStatus<string[]>
  favorite: (id: string) => Promise<void>
  unFavorite: (id: string) => Promise<void>
  invalidate: () => Promise<void>
} = () => {
  const queryKey = 'favorites'
  const queryClient = useQueryClient()
  const { data, isError } = useQuery(queryKey, fetchFavorites)
  const addMutation = useMutation(addFavorite, {
    onMutate: (targetId) => {
      queryClient.setQueryData<string[]>(queryKey, (oldFavorites) => {
        // TODO: そもそもデータがない時に操作しようとしている時点でおかしいので例外にすべきでは？
        if (oldFavorites === undefined) return [targetId]

        return oldFavorites.concat([targetId])
      })
    },
    // TODO: 失敗時のロールバック処理
    // TODO: 終了時のinvalidate処理のメリデメに関して検討
    onSettled: async () => {
      await queryClient.invalidateQueries(queryKey)
    },
  })
  const deleteMutation = useMutation(deleteFavorite, {
    onMutate: (targetId) => {
      queryClient.setQueryData<string[]>(queryKey, (oldFavorites) => {
        // TODO: そもそもデータがない時に操作しようとしている時点でおかしいので例外にすべきでは？
        if (oldFavorites === undefined) return []

        return oldFavorites.filter((favorite) => favorite !== targetId)
      })
    },
    // TODO: 失敗時のロールバック処理
    // TODO: 終了時のinvalidate処理のメリデメに関して検討
    onSettled: async () => {
      await queryClient.invalidateQueries(queryKey)
    },
  })

  const favorite = useCallback(
    (id: string) => addMutation.mutateAsync(id),
    [addMutation]
  )
  const unFavorite = useCallback(
    (id: string) => deleteMutation.mutateAsync(id),
    [deleteMutation]
  )

  const invalidate = useCallback(async () => {
    await queryClient.invalidateQueries(queryKey)
  }, [queryClient])

  if (isError) {
    return {
      data: {
        status: 'error',
      },
      favorite,
      unFavorite,
      invalidate,
    }
  }

  if (data === undefined) {
    return {
      data: {
        status: 'processing',
      },
      favorite,
      unFavorite,
      invalidate,
    }
  }

  return {
    data: {
      status: 'success',
      value: data,
    },
    favorite,
    unFavorite,
    invalidate,
  }
}

// 参考：React Query使わない場合の実装例
const useFavorites2: () => {
  data: ProcessStatus<string[]>
  favorite: (id: string) => Promise<void>
  unFavorite: (id: string) => Promise<void>
  invalidate: () => Promise<void>
} = () => {
  const [isError, setIsError] = useState(false)
  const [favoriteUserIds, setFavoriteUserIds] = useState<string[] | undefined>(
    undefined
  )

  useEffect(() => {
    ;(async () => {
      try {
        const ids = await favoriteRepository.list()
        setFavoriteUserIds(ids)
      } catch {
        setIsError(true)
      }
    })()
  }, [])

  const addFavorite = useCallback((id: string) => {
    setFavoriteUserIds((oldUserIds) => {
      if (oldUserIds === undefined) return [id]

      return oldUserIds.concat([id])
    })
  }, [])

  const deleteFavorite = useCallback((id: string) => {
    setFavoriteUserIds((oldUserIds) => {
      if (oldUserIds === undefined) return []

      return oldUserIds.filter((userId) => userId !== id)
    })
  }, [])

  const invalidate = useCallback(async () => {
    const ids = await favoriteRepository.list()
    setFavoriteUserIds(ids)
  }, [])

  const favorite = useCallback(
    async (id: string) => {
      try {
        addFavorite(id)
        await favoriteRepository.add(id)
      } finally {
        await invalidate()
      }
    },
    [invalidate, addFavorite]
  )

  const unFavorite = useCallback(
    async (id: string) => {
      try {
        deleteFavorite(id)
        await favoriteRepository.delete(id)
      } finally {
        await invalidate()
      }
    },
    [invalidate, deleteFavorite]
  )

  if (isError) {
    return {
      data: {
        status: 'error',
      },
      favorite,
      unFavorite,
      invalidate,
    }
  }

  if (favoriteUserIds === undefined) {
    return {
      data: {
        status: 'processing',
      },
      favorite,
      unFavorite,
      invalidate,
    }
  }

  return {
    data: {
      status: 'success',
      value: favoriteUserIds,
    },
    favorite,
    unFavorite,
    invalidate,
  }
}

// -------------------- User Hooks --------------------

const fetchAll = () => userRepository.listAll()

const useUserList: () => ProcessStatus<User[]> = () => {
  const { isError, data } = useQuery('users', fetchAll)

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

const FavoriteButton = ({
  onClick,
  disabled = false,
}: {
  onClick: () => Promise<void>
  disabled?: boolean
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Favorite
    </button>
  )
}

const UnFavoriteButton = ({
  onClick,
  disabled = false,
}: {
  onClick: () => Promise<void>
  disabled?: boolean
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      UnFavorite
    </button>
  )
}

const FavoriteButtonComponent = ({ userId }: { userId: string }) => {
  const { data, favorite, unFavorite } = useFavorites()

  const initialized = data.status === 'success'

  const isFavorited = useMemo(() => {
    if (data.status !== 'success') return false

    return data.value.includes(userId)
  }, [data, userId])

  return initialized && isFavorited ? (
    <UnFavoriteButton
      disabled={!initialized}
      onClick={() => unFavorite(userId)}
    />
  ) : (
    <FavoriteButton disabled={!initialized} onClick={() => favorite(userId)} />
  )
}

type UserListItemComponentProps = {
  user: User
}
const UserListItemComponent = ({ user }: UserListItemComponentProps) => {
  return (
    <div
      style={{
        display: 'block',
        padding: '20px 10px',
        borderBottom: '1px solid black',
      }}
    >
      <div>ユーザー名：{user.name}</div>
      <FavoriteButtonComponent userId={user.id} />
    </div>
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

const OptimisticUpdatePage: NextPage = () => {
  const { invalidate } = useFavorites()

  return (
    <div>
      <h1>楽観的更新処理のサンプル</h1>
      <div>
        <button onClick={invalidate}>invalidate</button>
      </div>
      <UserListComponent />
    </div>
  )
}

export default OptimisticUpdatePage
