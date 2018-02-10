#! /usr/bin/env node
'use strict'

const {env: {YARN}, exit} = require('process')
const {spawnSync} = require('child_process')
const {peerDependencies} = require('../package.json')

const args = Object
  .entries(peerDependencies)
  .map(([name, ver]) => `${name}@${ver}`)

const exec = ([cmd, ...prefix]) =>
  spawnSync(cmd, [...prefix, ...args], {stdio: 'inherit'})

const {status} = exec(
  YARN === 'true'
    ? ['yarn', 'add', '--peer']
    : ['npm', 'install', '--save-peer']
)

exit(status)
