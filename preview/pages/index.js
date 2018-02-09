import NextLink from 'next/link'
import Nav from '../components/Nav'

const model = ['Editor', 'Viewer']
  .map(name => [`/${name.toLowerCase()}`, name])

const Index = () => <Nav
  items={model}
  Link={props => <NextLink prefetch {...props} />}
/>

export default Index
