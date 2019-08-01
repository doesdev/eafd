#! /usr/bin/env node
'use strict'

// setup
process.title = 'EAFD'
const eafd = require('./index')
const { homedir } = require('os')
const { join } = require('path')
const { writeFileSync } = require('fs')
const params = process.argv.slice(2)
const help = `
  Usage
    $ eafd <name> [<output>]

  Options
    --name, -n "Name to insert before Snoop's EAFD"
    --output, -o [optional] "Full path of file to write to, should be .mp3"
      (if not specified it will output to your home directory)

  Examples
    $ eafd "your mom"
    $ eafd "your mom" /home/me/your_mom.mp3
    $ eafd -n "your mom"
    $ eafd -n "your mom" -o /home/me/your_mom.mp3

  Prints path of output file
`

let name, needsHelp, out, last
params.forEach((a) => {
  if (['-h', '--help'].includes(a)) needsHelp = true
  if (['-n', '--name'].includes(last)) name = a
  if (['-o', '--output'].includes(last)) out = a
  last = a
})

async function cli () {
  if (needsHelp) return console.log(help)
  if (!name) name = params[0]
  if (!name) return console.error(`EAFD: Name must be specified`)
  if (!out) out = params[1] || join(homedir(), `${name}_can_eafd.mp3`)
  const data = await eafd(name)
  writeFileSync(out, data)
  return console.log(out)
}
cli()
