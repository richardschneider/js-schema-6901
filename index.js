'use strict';

var flatten = require('flat');
var schema = require('js-schema');

/**
 * Return errors that are flatten to JSON Pointer references.
 *
 * @param(errs) errors from js-schema.
 */
var jpErrors = function (errs, options)
{
	if (!errs) return errs;

	options = options || {};
	options.prefix = options.prefix || '/';

	return flatten(errs, options);
};

schema.Schema.prototype.publicFunctions = ['jpErrors'];
schema.Schema.prototype.jpErrors = function (instance, options) {
	return jpErrors(this.validate.errors(instance), options);
};
 
module.exports = schema;
