export const DefaultAllContainer = ({children}) =>
  <ul />

const Viewer = ({
  data = {},
  AllContainer = DefaultAllContainer,
  TitleContainer = 'div',
  ContentContainer = 'div',
  ChildrenContainer = 'details'
}) => <div />

export default Viewer
