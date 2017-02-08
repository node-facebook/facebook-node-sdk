'use strict';

var	tt = require('typescript-definition-tester');

describe('typescript definition tests', function() {
	this.slow(1800);
	this.timeout(2000);
	it('should compile examples successfully against fb.d.ts', (done) => {
		tt.compileDirectory(
			__dirname,
			function(fileName) {
				return fileName.indexOf('.ts') > -1;
			},
			function() {
				done();
			});
	});
});
