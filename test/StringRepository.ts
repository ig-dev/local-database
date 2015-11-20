/// <reference path="./typings/mocha/mocha.d.ts" />
/// <reference path="./typings/chai/chai.d.ts" />

import {expect} from 'chai';
import StringRepository from '../src/StringRepository';

interface Dictionary {
	[index: string] : string
}

function getSomeKeysAndValues() : Dictionary {
	var values : Dictionary = {};
	for(var i : number = 0; i < 10; i++) {
		var key : string = "foo" + i.toString();
		var value : string = "bar" + i.toString();
		values[key] = value;
	}
	return values;
}

async function populateRepository(repository : StringRepository, values: Dictionary)
{
	for (var key in values) {
		await repository.saveByKey(key, values[key]);
	}
}

function createRepository() : StringRepository {
	return new StringRepository("foo");
}

describe("Constructor", () => {
	it("can be created", () => {
		createRepository()
	});
	
	it("can fetch non-persitently after saving", async () => {
		var values : Dictionary = getSomeKeysAndValues();
		var repository : StringRepository = createRepository()
		populateRepository(repository, values);

		for (var key in values) {
			var result: string = await repository.fetchByKey(key);
			expect(result).to.equal(values[key]);
		}
	});
	
	it("can fetch persitently after saving", async () => {
		var values : Dictionary = getSomeKeysAndValues();
		var repository : StringRepository = createRepository()
		populateRepository(repository, values);
		repository = createRepository()
		for (var key in values) {
			var result: string = await repository.fetchByKey(key);
			expect(result).to.equal(values[key]);
		}
	});
});