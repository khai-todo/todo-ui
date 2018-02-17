import {OnlyChildrenFragment} from './lib/utils'

export const DefaultAllContainer = ({Title, Content, Children}) => <ul>
  <li>
    <details>
      <summary>
        <Title />
      </summary>
      <Content />
    </details>
  </li>
  <Children />
</ul>

export const DefaultTitleContainer = OnlyChildrenFragment.clone()
export const DefaultContentContainer = OnlyChildrenFragment.clone()
export const DefaultChildrenContainer = OnlyChildrenFragment.clone()

export const DefaultOnError = ({Error, message, details}) => {
  throw new Error(`${message} (${details})`)
}

export const Viewer = ({
  data,
  level = 0,
  AllContainer = DefaultAllContainer,
  TitleContainer = DefaultTitleContainer,
  ContentContainer = DefaultContentContainer,
  ChildrenContainer = DefaultChildrenContainer,
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
          level={level}
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
          level={level}
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
    const {
      title,
      content,
      children
    } = data

    const props = {
      level,
      AllContainer,
      TitleContainer,
      ContentContainer,
      ChildrenContainer,
      OnError
    }

    const nextProps = {
      ...props,
      level: level + 1
    }

    const Title = () => <TitleContainer {...props}>{title}</TitleContainer>
    const Content = () => <ContentContainer {...props}>{content || null}</ContentContainer>

    const Children = () => <ChildrenContainer>{
      (Array.isArray(children) ? children : [])
        .map((data, key) => <Viewer
          key={key}
          data={data}
          {...nextProps}
        />)
    }</ChildrenContainer>

    return <AllContainer
      Title={Title}
      Content={Content}
      Children={Children}
    />
  }
}

export default Viewer
