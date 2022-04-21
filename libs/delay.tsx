export const delay = (duration: number = 1000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}
