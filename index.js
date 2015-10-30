'use strict';

var flatten = require('./flatten');
var schema = require('js-schema');

/**
 * Return errors that are flatten to JSON Pointer references.
 *
 * @param(errs) errors from js-schema.
 */
var jpErrors = function (errs)
{
	if (!errs) return errs;
	
	var options = {
		delimiter: '/',
		prefix: '/'
	};
	return flatten(errs, options);
};

schema.Schema.prototype.publicFunctions = ['jpErrors'];
schema.Schema.prototype.jpErrors = function (instance) {
	return jpErrors(this.validate.errors(instance));
};
 
module.exports = jpErrors;
