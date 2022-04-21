export type User = {
  id: string
  name: string
}

export type ProcessStatus<T> =
  | {
      status: 'processing'
    }
  | {
      status: 'error'
    }
  | {
      status: 'success'
      value: T
    }
