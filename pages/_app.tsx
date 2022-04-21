import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Link from 'next/link'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /** staleTime/cacheTimeに関して
       * ~ staleTime: 通信せずキャッシュされているデータを利用する。useQueryしているコンポーネントが複数マウントされた際の通信抑制にもなるのでstaleTimeは短い時間でいいので設定したほうが良さそう。
       * staleTime ~ cacheTime: refetchOn~の設定にしたがい、refetchすべきタイミングでrefetchする。動作的にはまずキャッシュされてるデータで表示し、refetch完了次第表示を最新のデータで更新する。
       * cacheTime ~ : この時間以上経過したキャッシュは破棄される。
       */
      staleTime: 1000 * 5, // デフォルト：0
      cacheTime: 5 * 60 * 1000, // デフォルト： 5 * 60 * 1000 (5分)
      // 失敗時にリトライする回数。falseを設定するとリトライしない。（デフォルト：3
      retry: false,
      // マウント時にrefetchするか否か（デフォルト：true
      refetchOnMount: true,
      // オフライン状態から復旧した際にrefetchするか否か（デフォルト：true
      refetchOnReconnect: false,
      // ウィンドウフォーカス時ににrefetchするか否か（デフォルト：true
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Link href={`/`}>
          <a>Top</a>
        </Link>
      </div>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
