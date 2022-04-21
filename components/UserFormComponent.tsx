import { ChangeEventHandler, FormEventHandler, useState } from 'react'

type Props = {
  onSubmit: (name: string) => Promise<void>
}
export const UserFormComponent = ({ onSubmit }: Props) => {
  const [name, setName] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value)
  }

  const onSubmitLocal: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    setIsProcessing(true)
    try {
      await onSubmit(name)
      setName('')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={onSubmitLocal}>
      <div>
        <input type="text" onChange={onChangeName} value={name} />
      </div>
      <div>
        <button disabled={isProcessing}>送信</button>
      </div>
    </form>
  )
}
