import {Fragment} from 'react'
import {mapProps} from 'recompose'

export const id = Component => {
  const ID = Object.assign(
    props => <Component {...props} />,
    {clone: () => id(ID)}
  )
  return ID
}

export const onlyProps = (...names) => {
  const fn = mapProps(
    props => names.reduce(
      (obj, key) => Object.assign(obj, {[key]: props[key]}),
      {}
    )
  )

  return x => id(fn(x))
}

export const mkOnlyProps = (...names) => Component => {
  const fn = onlyProps(...names)
  return Component ? fn(Component) : fn
}

export const onlyChildren = mkOnlyProps('children')

export const OnlyChildrenFragment = onlyChildren(Fragment)
