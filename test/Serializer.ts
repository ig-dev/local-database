/// <reference path="./typings/tsd.d.ts" />
import {expect} from 'chai';
import Serializer from '../src/Serializer';
import EntryUtility from './utility/EntryUtility';

describe("Serializer", () => {
	it("serializes Entry properties and relationships", () => {
		var utility : EntryUtility = new EntryUtility();
		utility.buildEntry();
		
		var entry = utility.getEntry();
		var expectation = utility.getSerialized();
		var serializer : Serializer = new Serializer();
		var serialized = serializer.serialize(entry);
		expect(serialized).to.deep.equal(expectation);
	});
});