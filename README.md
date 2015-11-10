# js-schema-6901 [![Build status](https://ci.appveyor.com/api/projects/status/l79mft3t4nvi5ja6?svg=true)](https://ci.appveyor.com/project/richardschneider/js-schema-6901)


[JSON Pointer](http://www.rfc-base.org/txt/rfc-6901.txt), RFC 6901, defines a string syntax for identifying a specific value within a JavaScript Object Notation (JSON) document.  For example, evaluating "foo/0/bar" against `{ foo: [ { bar: 1}, { bar: 2} }` returns 1;

[js-schema](https://www.npmjs.com/package/js-schema) is simple and intuitive object validation library.  It provides support for [JSON Schema](http://json-schema.org/).

This package reports schema validation errors with a JSON Pointer to the offending field by adding the `jpErrors` method to a schema.

## Getting started [![npm version](https://badge.fury.io/js/js-schema-6901.svg)](https://badge.fury.io/js/js-schema-6901)

Install with `$ npm install js-schema-6901`.  Bower will be coming soon.

## Usage

````
require('js-schema-6901');

var schema = require('js-schema');
var person = schema({
    name: String,
    dob: /\d{4}\-\d{2}\-\d{2}/,
    children: Array.of(schema.self)
});

var badboy = {
    name: 'me', 
    children: [
        {dob: '2000-01-01', children: []}, 
		{dob: '2000-1-01'}
]};

console.log(person.jpErrors(badboy));
````

produces

````
{ 
   '/dob': 'key is not present in the object',
   '/children/0/name': 'key is not present in the object',
   '/children/1/name': 'key is not present in the object',
   '/children/1/dob': '2000-1-01 is not matched with RegExp -> /\\d{4}\\-\\d{2}\\-\\d{2}/',
   '/children/1/children': 'key is not present in the object' }
}
````

# License
The MIT license

Copyright © 2015 Richard Schneider (makaretu@gmail.com)
