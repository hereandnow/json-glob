# json-glob [![Build Status](https://travis-ci.org/hereandnow/json-glob.svg?branch=master)](https://travis-ci.org/hereandnow/json-glob)

> deep merge of globbed json-files


## Install

```
$ npm install --save json-glob
```


## Usage

```js
var jsonGlob = require('json-glob');

jsonGlob('./fixtures/**/*.json').then(function (final) {
    // do whatever you want with your merged json
});
```


## API

### jsonGlob([patterns])

#### patterns

*Required*
Type: `string`

globbing patterns

## License

MIT © [hereandnow](http://www.bastianbehrens.de)
