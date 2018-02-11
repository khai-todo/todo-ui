import path from 'path'
import {readFileSync, readdirSync} from 'fs'
import * as yaml from 'js-yaml'

const res = readdirSync(path.resolve(__dirname, 'data'))
  .map(x => [
    path.parse(x).name,
    yaml.safeLoad(readFileSync(
      path.resolve(__dirname, 'data', x),
      'utf8'
    ))
  ])
  .reduce(
    (obj, [key, val]) => Object.assign(obj, {[key]: val}),
    {}
  )

export default res
