"use strict";

const regexSort = require("../lib");

let result = regexSort([
    "path/to/index.json",
    "path/to/foo.js",
    "path/to/index.min.js",
    "path/to/index.js"
], [
    /index\.(min\.)?js$/
  , /index\.json$/
]);

console.log(result);
// [ 'path/to/index.js',
//   'path/to/index.min.js',
//   'path/to/index.json',
//   'path/to/foo.js' ]
