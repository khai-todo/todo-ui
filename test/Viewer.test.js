import renderer from 'react-test-renderer'
import Subject from '../src/Viewer'
import snap from './lib/snapshot'
import * as data from './lib/data'

it('empty rendering', () => snap(<Subject />))

describe('when passing data', () => {
  const {valid, invalid} = data

  describe('accept valid data', () => valid.forEach(({description, value}) => {
    it(description, () => snap(<Subject data={value} />))
  }))

  describe('handle invalid data', () => invalid.forEach(({description, cases}) => {
    const createErrorComponent = object => () => <output>
      <p>An Error occurred.</p>
      <p><code><pre>{
        '\n' + JSON.stringify(object, undefined, 2) + '\n'
      }</pre></code></p>
    </output>

    describe(description, () => cases.forEach((x, i) => {
      const OnError = createErrorComponent({
        index: i,
        subject: x
      })

      it(`Case ${i}: ${JSON.stringify(x)}`, () => {
        expect(
          renderer.create(
            <Subject data={x} OnError={OnError} />
          ).toJSON()
        ).toBe(
          renderer.create(<OnError />).toJSON()
        )
      })
    }))
  }))
})
