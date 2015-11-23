/// <reference path="./typings/tsd.d.ts" />
import {expect} from 'chai';
import Entry from '../src/Entry';
import FooEntry from './doubles/FooEntry';
import Serializer from '../src/Serializer';
import Serialized from '../src/Serialized';


var fooExpectation : Serialized = new Serialized();

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

describe("Serializer", () => {
	it("serializes basic Entry properties", () => {
		var entry : FooEntry = new FooEntry();
		var serializer : Serializer = new Serializer();
		var serialized = serializer.serialize(entry);
		expect(serialized).to.deep.equal(fooExpectation);
	});
});