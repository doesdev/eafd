# eafd [![NPM version](https://badge.fury.io/js/eafd.svg)](https://npmjs.org/package/eafd)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   [![Dependency Status](https://dependencyci.com/github/doesdev/eafd/badge)](https://dependencyci.com/github/doesdev/eafd)

> "Enter name here" can eat a fat, um, turkey

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
