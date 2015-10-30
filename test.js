'use strict';

var schema = require('js-schema');
var should = require('should');
require('./index');

var person = schema({
	name: String,
	dob: /\d{4}\-\d{2}\-\d{2}/,
    children: Array.of(schema.self)
});

describe ('Validation error', function() {
	var bad = {
		name: 'me', 
		children: [
			{dob: '2000-01-01', children: []}, 
			{dob: '2000-1-01'}
	]};
	var good = {
		name: 'me', 
		dob: '2000-01-01', 
		children: []
	};
	
    it('should allow no validation errors', function() {
		var errs = person.jpErrors(good);
		errs.should.be.false;
    });
	
    it('should have JSON pointer', function() {
		var errs = person.jpErrors(bad);
		errs.should.have.property('/dob');
    });

    it('should support arrays and other objects', function() {
		var errs = person.jpErrors(bad);
		errs.should.have.property('/children/0/name');
    });

    it('should have a string message', function() {
		var errs = person.jpErrors(bad);
		errs['/dob'].should.be.a.type('string');
    });

});
