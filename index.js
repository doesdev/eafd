'use strict'

// setup
const tts = require('google-tts-api')
const { get } = require('axios')
const { escape } = require('validator')
const { resolve } = require('path')
const { readFileSync } = require('fs')
const eafd = readFileSync(resolve(__dirname, `audio`, `eafd.mp3`))

module.exports = async (name) => {
  let url = await tts(escape(name), `en`, 1)
  let { data } = await get(url, {responseType: 'arraybuffer'})
  return Buffer.concat([data, eafd], data.length + eafd.length)
}
