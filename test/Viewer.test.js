import renderer from 'react-test-renderer'
import Subject from '../src/Viewer'
import snap from './lib/snapshot'
import data from './lib/data'

it('empty rendering', () => snap(<Subject />))

describe('when passing data', () => {
  const {correct, ...incorrect} = data

  it('accept correct data', () => snap(<Subject data={correct} />))

  describe('that is incorrect', () => Object.entries(incorrect).forEach(([key, val]) => {
    describe(`that came from ${key}.yaml`, () => {
      it('should throw an error when no alternate construct is provided', () => {
        expect(() => <Subject data={val} />).toThrow()
      })

      it('should render alternate construct when it is provided', () => {
        const OnError = () => <output>
          <p>An Error occurred.</p>
          <p><code><pre>{
            '\n' + JSON.stringify({key, val}, undefined, 2) + '\n'
          }</pre></code></p>
        </output>

        expect(
          renderer.create(
            <Subject data={val} OnError={OnError} />
          ).toJSON()
        ).toBe(
          renderer.create(
            <OnError />
          ).toJSON()
        )
      })
    })
  }))
})
