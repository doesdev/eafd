# eafd [![NPM version](https://badge.fury.io/js/eafd.svg)](https://npmjs.org/package/eafd)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   

> When you just don't have the words. Snoop does.

## Web Service

Returns an audio file. If someone clicks the link, better hope their speakers
are turned down. Especially if you send them the dirty version.

It's perfect for team meetings, ping it to your co-workers while on a call and
listen for the fun :thumbsup:.

If you don't add anything to the path it just picks some random phrases from
generally unliked things. If you pass it some words though you can custom
tailor the message for your audience. Just send this in your group chat:
https://eaft.doesdev.com/everyone-in-this-pointless-meeting

#### [Clean Version](https://eaft.doesdev.com) ( "... can eat a fat turkey" )
```
https://eaft.doesdev.com
```

#### [Dirty Version](https://eafd.doesdev.com) ( "... can eat a fat ...." )
```
https://eafd.doesdev.com
```

## CLI Usage

```sh
$ npm install --global eafd
```

```sh
$ eafd --help
```

```sh
$ eafd "someones name" /path/to/write/file.mp3
```

## Programmatic Usage

```sh
$ npm install --save eafd
```

```js
const eafd = require('eafd')
const { writeFileSync } = require('fs')

async function main (name, output) {
  let mp3Data = await eafd(name)
  writeFileSync(output, mp3Data)
}
```

## API

#### Main function returns `Promise` that resolves with `Buffer` of mp3 file

#### `eafd(*name)`

- **name** *[string - required]* Name to insert before Snoop's EAFD

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
