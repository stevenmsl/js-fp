//Make sure npm version > 6 or run the following command to upgrade it
//npm i -g npm
//install lodash 
//npm i --save lodash

var _ = require('lodash')
var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" }

var result = _.assign({ a: "an old property" }, foo, bar);
// result => { a: 'a property', b: 4, c: 'an other property' }
console.log(result);