export const DefaultAllContainer = ({children}) =>
  <ul />

export const DefaultOnError = ({Error, message, details}) => {
  throw new Error(`${message} (${details})`)
}

export const Viewer = ({
  data = {},
  AllContainer = DefaultAllContainer,
  TitleContainer = 'div',
  ContentContainer = 'div',
  ChildrenContainer = 'details',
  OnError = DefaultOnError
}) => {
  const createTypeError = details =>
    <OnError
      Error={TypeError}
      message='Invalid type of data'
      details={details}
    />

  if (typeof data !== 'object') return createTypeError("typeof data !== 'object'")
  if (data === null) return createTypeError('data is null')
  if (Array.isArray(data)) return createTypeError('data is an array')

  return <div />
}

export default Viewer
