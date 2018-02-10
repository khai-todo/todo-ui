import Subject from '../pages/viewer'
import renderer from 'react-test-renderer'

it('render correctly', () => {
  expect(
    renderer.create(<Subject />).toJSON()
  ).toMatchSnapshot()
})
