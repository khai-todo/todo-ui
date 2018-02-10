import Subject from '../pages/editor'
import renderer from 'react-test-renderer'

it('render correctly', () => {
  expect(
    renderer.create(<Subject />).toJSON()
  ).toMatchSnapshot()
})
