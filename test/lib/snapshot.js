import React from 'react'
import renderer from 'react-test-renderer'

export const snapshot = subject => {
  if (typeof subject === 'function') {
    const value = (() => {
      try {
        const res = subject()

        return {
          value: res,
          typeof: typeof res,
          constructor: res && res.constructor && res.constructor.name,
          string: res && typeof res.toString === 'function' && String(res)
        }
      } catch (error) {
        return {error}
      }
    })()

    expect(JSON.stringify(value)).toMatchSnapshot()
  } else if (React.isValidElement(subject)) {
    expect(renderer.create(subject).toJSON()).toMatchSnapshot()
  } else {
    expect(JSON.stringify(subject)).toMatchSnapshot()
  }
}

export default snapshot
