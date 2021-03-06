# クライアントキャッシュライブラリというかReactQueryに関するサンプルコードとか考えとか

## ReactQuery/useSWRで解決できる問題

### グローバルステートの管理のための手書きのコードを削減する

[Sample](https://gilded-pegasus-7c1f88.netlify.app/reduct_global_store)

わかりやすい例として、以下を挙げる。

- 認証が必要なサービス
- ヘッダーにログインユーザー情報が表示されている
- ユーザー情報の変更やログアウト等の操作をしたらそれに応じてヘッダーのログインユーザー表示の更新が必要

この場合、自分の場合はログインユーザー情報を保持するグローバルストアを作成し、ユーザー情報の変更やログアウトをしたらそのストアを操作することで表示の変更をしていた。 この方法でも問題なく動作はするんだけど、そのためのコードを書く必要がありコード量が増えてしまうという問題がある。

ここでクライアントキャッシュライブラリを使うと、ユーザー情報を変更したりログアウトしたりしたらinvalidateするだけでAPIの返却値に従い表示が更新されるので、自前でストアを記述する必要がなくなる。

こんな風に、グローバルストアにAPIの返却値がそのまま入っているようなケースでは、その管理をクライアントキャッシュライブラリを利用することでコードが削減できる。

### サーバーへのリクエスト数の削減

[Sample](https://gilded-pegasus-7c1f88.netlify.app/reduct_network)

[参考記事](https://blog.microcms.io/optimize-cache-with-react-query/#h7e28ab6b03)

デフォルトの設定ではコンポーネントのマウント時やウィンドウフォーカス時にinvalidateされて通信が走るので、この問題を解決するために使う場合は参考記事のようにinvalidateの設定を弄る必要がある点に注意。

記事の例ではキャッシュが常に新しいものとみなされるので、データの修正等キャッシュが古くなるような操作をした場合は明示的にinvalidateする必要があるが、効果的に使えばリクエスト数を大幅に削減出来る。

### ブラウザバックした際のスクロール位置保持

[Sample](https://gilded-pegasus-7c1f88.netlify.app/scroll_restoration)

[MDN -scrollRestoration](https://developer.mozilla.org/ja/docs/Web/API/History/scrollRestoration)

ブラウザの `scrollRestoration` 機能で、戻るボタンを押した際に自動的にスクロール位置が復元されるが、前提としてページ表示時にコンテンツが全て表示されている必要がある。なので通信などで非同期的にデータを取得しコンテンツを表示するようなページの場合はスクロール位置の復元がうまく動作しない。

このような場合でもクライアントキャッシュライブラリを使えばページ表示時点でキャッシュを元にページがまるまる表示されるので、スクロール位置の復元が正常に動作してくれる。

### 通信待ちの多さによる使いづらさの解消

省略

## 他サンプル

[ReactQueryを用いた楽観的更新](https://gilded-pegasus-7c1f88.netlify.app/optimistic_update)

## React Queryに関するアレコレ

### デフォルト設定は弄ったほうが良い

デフォルト設定だと、

- staleTimeが0なので、useQueryしているコンポーネントを複数同時にマウントした際に同じ通信が複数走ってしまう
- refetchOnWindowFocusがtrueなので、サーバーに負荷がかかる
  - 他refetch系のオプションも検討したほうがいい
- retryも0で良いケースが多いのでは？

等、使用するアプリケーションにとってベストな設定になってるわけではないので、状況に合わせて設定したほうが良い。

最低、以下の項目は検討が必要だと思った。

```typescript
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
```

### cacheTimeオプション

https://react-query.tanstack.com/reference/useQuery

使っていない古いキャッシュデータは自動的に削除してくれる。

これ、無限スクロールを実装する際に特に良いと思っていて、というのも無限スクロールでは極力refetch系のオプションを切っておきたい。無限スクロールではrefetchの際に全データ再取得されてしまうので、長大なスクロールの際にめちゃくちゃAPIが叩かれてしまうから。

ただ、refetch系のオプションを切ってしまうと「じゃあユーザーがタブ閉じずにずっと使い続ける人なら、古いデータがずっと残ってしまうよね？」という問題がある。その場合このcacheTimeオプション及び古いデータを消してくれる機能があるおかげで問題にならない。ありがてぇ。

### useQueryClientの返り値をデストラクチャしない

[参考issue](https://github.com/tannerlinsley/react-query/issues/1575)

デストラクチャして使おうとするとエラーになる

## useSWRは？

個人的にReactQueryのほうが以下の点で良かった

- DevToolがある
- cacheTimeを設定できる等、オプションが豊富
- useSWRのuseSWRInfiniteに変な挙動がある（後述）

### useSWRInfiniteの挙動が不可解

[Sample](https://gilded-pegasus-7c1f88.netlify.app/use_swr_infinite)

サンプルで確認できるが、0ページ目取得後「more」ボタンにより次のデータを取得しようとしたら、何故か0ページ目再取得してから1ページ目を取得しようとする。

また、`setSize(0)` によりデータを空にした後0から再取得しようとしても、キャッシュが利用されてしまう。

バージョンによる一時的な不具合かもしれないし自分の書き方が悪いのかもしれないが、ちょっと謎挙動が多くあまり使いたくない感がある。
