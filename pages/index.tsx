import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h2>React Query</h2>
      <ul>
        <li>
          <Link href={`/react_query/normal`}>
            <a>通常パターン</a>
          </Link>
        </li>
        <li>
          <Link href={`/react_query/pagination?page=0`}>
            <a>ページネーション</a>
          </Link>
        </li>
        <li>
          <Link href={`/react_query/infinite`}>
            <a>無限スクロール</a>
          </Link>
        </li>
        <li>
          <Link href={`/reduct_global_store`}>
            <a>認証情報のストアとして使用するパターン</a>
          </Link>
        </li>
        <li>
          <Link href={`/reduct_network`}>
            <a>staleTimeにInfinity等でかい値を設定して通信削減パターン</a>
          </Link>
        </li>
        <li>
          <Link href={`/scroll_restoration`}>
            <a>スクロール位置復元パターン</a>
          </Link>
        </li>
        <li>
          <Link href={`/optimistic_update`}>
            <a>楽観的更新</a>
          </Link>
        </li>
      </ul>
      <h2>useSWR</h2>
      <ul>
        <li>
          <Link href={`/use_swr_infinite`}>
            <a>無限スクロール</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
