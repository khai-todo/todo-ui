import renderer from 'react-test-renderer'

export const snapshot = subject =>
  expect(renderer.create(subject).toJSON()).toMatchSnapshot()

export default snapshot
