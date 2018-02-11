import ExpectedEditor from '../src/Editor'
import ExpectedViewer from '../src/Viewer'
import * as Received from '../src'

describe('importing the package', () => {
  it('should have Editor', () => {
    expect(Received.Editor).toBe(ExpectedEditor)
  })

  it('should have Viewer', () => {
    expect(Received.Viewer).toBe(ExpectedViewer)
  })

  it('should have ToDoEditor', () => {
    expect(Received.ToDoEditor).toBe(ExpectedEditor)
  })

  it('should have ToDoViewer', () => {
    expect(Received.ToDoViewer).toBe(ExpectedViewer)
  })
})
