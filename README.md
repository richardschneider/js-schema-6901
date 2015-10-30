# js-schema-6901

[JSON Pointer](http://www.rfc-base.org/txt/rfc-6901.txt), RFC 6901, defines a string syntax for identifying a specific value within a JavaScript Object Notation (JSON) document.  For example, evaluating "foo/0/bar" against `{ foo: [ { bar: 1}, { bar: 2} }` returns 1;

[js-schema](https://www.npmjs.com/package/js-schema) is simple and intuitive object validation library.  It provides support for [JSON Schema](http://json-schema.org/).

This package reports schema validation errors with a JSON Pointer to the offending field.

````
var schema = ...
var instance = ...

console.log(schema.errors(instance));
````

produces

````
{
   "foo": "the field is missing"
}
````

