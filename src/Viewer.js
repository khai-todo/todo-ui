export const DefaultAllContainer = ({children}) =>
  <ul />

export const DefaultOnError = ({Error, message, details}) => {
  throw new Error(`${message} (${details})`)
}

export const Viewer = ({
  data,
  AllContainer = DefaultAllContainer,
  TitleContainer = 'div',
  ContentContainer = 'div',
  ChildrenContainer = 'details',
  OnError = DefaultOnError
}) => {
  return validate() || output()

  function validate () {
    return checkWholeDoc() || checkField()

    function checkWholeDoc () {
      const createTypeError = details =>
        <OnError
          Error={TypeError}
          message='Invalid type of data'
          details={details}
        />

      if (data == null) return createTypeError('data is null or undefined')
      if (typeof data !== 'object') return createTypeError("typeof data !== 'object'")
      if (Array.isArray(data)) return createTypeError('data is an array')
    }

    function checkField () {
      const createFieldError = (message, field) =>
        <OnError
          Error={Error}
          message={message}
          details={field}
        />

      const checkMissingField = field =>
        field in data ? undefined : createFieldError('Missing Field', field)

      const checkFieldValidity = (field, isValid, details) =>
        isValid(data[field]) ? undefined : createFieldError('Invalid field', `${field}: ${details}`)

      return (
        checkMissingField('title') ||
        checkFieldValidity('title', x => typeof x === 'string', 'Provided value is not a string') ||
        checkFieldValidity('children', x => !x || Array.isArray(x), 'Provided value is neither falsy nor an array')
      )
    }
  }

  function output () {
    return <div />
  }
}

export default Viewer
