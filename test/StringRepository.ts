/// <reference path="./typings/mocha/mocha.d.ts" />

import StringRepository from '../src/StringRepository';

describe("Constructor", () => {
	it("can be created", () => {
		new StringRepository("foo");
	});
});