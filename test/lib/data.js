import path from 'path'
import {readFileSync} from 'fs'
import * as yaml from 'js-yaml'

const get = name => yaml.safeLoad(readFileSync(
  path.resolve(__dirname, 'data', `${name}.yaml`),
  'utf8'
))

export const valid = get('valid')
export const invalid = get('invalid')
