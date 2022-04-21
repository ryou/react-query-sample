import type { NextPage } from 'next'
import { UserFormComponent } from '../../components/UserFormComponent'
import { useCallback } from 'react'
import { authService } from '../../factory/singleton'
import { useMutation, useQuery, useQueryClient } from 'react-query'

// -------------------- Hooks --------------------

const queryKey = 'loginUser'

const fetchLoginUser = async () => {
  try {
    return await authService.fetchLoginUser()
  } catch {
    return undefined
  }
}

const editLoginUser = async (name: string) => {
  await authService.editLoginUser({ name })
}

const useAuth = () => {
  const queryClient = useQueryClient()
  const { data } = useQuery(queryKey, fetchLoginUser)
  const mutation = useMutation(editLoginUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKey)
    },
  })

  const edit = useCallback(
    (name: string) => mutation.mutateAsync(name),
    [mutation]
  )

  const login = useCallback(
    async (params: { email: string; password: string }) => {
      await authService.login(params)
      await queryClient.invalidateQueries(queryKey)
    },
    [queryClient]
  )

  const logout = useCallback(async () => {
    await authService.logout()
    await queryClient.invalidateQueries(queryKey)
  }, [queryClient])

  return {
    loginUser: data,
    edit,
    login,
    logout,
  }
}

// -------------------- View --------------------

const Header = () => {
  const { loginUser, login, logout } = useAuth()

  const onClickLogin = useCallback(async () => {
    await login({ email: 'hoge', password: 'fuga' })
  }, [login])

  return (
    <div style={{ backgroundColor: '#eee' }}>
      <h3>ヘッダー</h3>
      {loginUser !== undefined ? (
        <div>
          <div>
            <span>ユーザー名：</span>
            <span>{loginUser.name}</span>
          </div>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <button onClick={onClickLogin}>login</button>
        </div>
      )}
    </div>
  )
}

const Content = () => {
  const { loginUser, edit } = useAuth()

  const onSubmit = useCallback(
    async (name: string) => {
      await edit(name)
    },
    [edit]
  )

  return (
    <div>
      <h3>コンテンツ</h3>
      {loginUser !== undefined && (
        <div>
          <h4>ユーザー情報編集</h4>
          <UserFormComponent onSubmit={onSubmit} />
        </div>
      )}
    </div>
  )
}

const ReductGlobalStorePage: NextPage = () => {
  return (
    <div>
      <div>
        <h1>認証に関する状態をReactQueryで管理するサンプル</h1>
        <p>
          グローバルな状態のうち、サーバーの返却値をそのまま保存してるだけのようなものはReactQuery使えばコード削減出来るよというやつ。
        </p>
      </div>
      <Header />
      <Content />
    </div>
  )
}

export default ReductGlobalStorePage
