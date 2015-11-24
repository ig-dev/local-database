/// <reference path="./typings/tsd.d.ts" />
import {expect} from 'chai';
import Entry from '../src/Entry';
import FooEntry from './doubles/FooEntry';
import Serializer from '../src/Serializer';
import Serialized from '../src/Serialized';

var entry : FooEntry = new FooEntry();

entry.fooEntry = new FooEntry();
entry.fooEntry.id = 5;

var fooExpectation : Serialized = new Serialized();

fooExpectation.properties.push({
	property: "id",
	value: 1
});

fooExpectation.properties.push({
	property: "foo",
	value: "foo value"
});

fooExpectation.properties.push({
	property: "bar",
	value: "bar value"
});

fooExpectation.properties.push({
	property: "baz",
	value: 5.5
});

fooExpectation.entries.push({
	property: "fooEntry",
	className: "FooEntry",
	id: 5
});

describe("Serializer", () => {
	it("serializes basic Entry properties", () => {
		var serializer : Serializer = new Serializer();
		var serialized = serializer.serialize(entry);
		expect(serialized).to.deep.equal(fooExpectation);
	});
});