import { NextPage } from 'next'
import { useUserList } from './index'
import { UserFormComponent } from '../../components/UserFormComponent'
import { useRouter } from 'next/router'

const ReductNetworkCreatePage: NextPage = () => {
  const router = useRouter()
  const { createUser } = useUserList()

  const onSubmit = async (name: string) => {
    await createUser({ name })
    await router.push('/reduct_network')
  }

  return (
    <div>
      <h2>ユーザー作成</h2>
      <UserFormComponent onSubmit={onSubmit} />
    </div>
  )
}

export default ReductNetworkCreatePage
