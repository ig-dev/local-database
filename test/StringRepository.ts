/// <reference path="./typings/mocha/mocha.d.ts" />
/// <reference path="./typings/chai/chai.d.ts" />

import {expect} from 'chai';
import StringRepository from '../src/StringRepository';

describe("Constructor", () => {
	it("can be created", () => {
		new StringRepository("foo");
	});
	
	it("can fetch after saving", () => {
		var KEY : string = "fookey";
		var VALUE : string = "fooval";
		var repository : StringRepository = new StringRepository("foo");
		repository.saveByKey(KEY, VALUE);
		var result :string = repository.fetchByKey(KEY);
		expect(result).to.equal(VALUE);
	});
});