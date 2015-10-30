# js-schema-6901

[JSON Pointer](http://www.rfc-base.org/txt/rfc-6901.txt), RFC 6901, defines a string syntax for identifying a specific value within a JavaScript Object Notation (JSON) document.  For example, evaluating "foo/0/bar" against `{ foo: [ { bar: 1}, { bar: 2} }` returns 1;

[js-schema](https://www.npmjs.com/package/js-schema) is simple and intuitive object validation library.  It provides support for [JSON Schema](http://json-schema.org/).

This package reports schema validation errors with a JSON Pointer to the offending field.

````
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

