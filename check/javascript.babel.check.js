'use strict'
const path = require('path')
const main = require('./lib/test-spawn')

main({
  defaultExecutable: 'sh',
  defaultSpawnArguments: [path.resolve(__dirname, '../sh/build.sh')],
  envMiddleName: 'BABELJS'
})
