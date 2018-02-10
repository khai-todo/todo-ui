#! /usr/bin/env node
const {peerDependencies} = require('../package.json')

console.info(
  Object
    .entries(peerDependencies)
    .map(([name, ver]) => `${name}@${ver}`)
    .join('\n')
)
