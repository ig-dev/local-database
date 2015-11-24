/// <reference path="./typings/tsd.d.ts" />
"use strict";
import {expect} from 'chai';
import EntryCollection from '../src/EntryCollection';
import Entry from '../src/Entry';
import FooEntry from './doubles/FooEntry';


describe("EntryCollection", () => {
	it("can add and retrieve", () => {
		var firstEntry: FooEntry = new FooEntry();
		var secondEntry: FooEntry = new FooEntry();
		
		firstEntry.foo = "changed";				
		firstEntry.id = 1;
		secondEntry.id = 2;
		
		var collection: EntryCollection<FooEntry> = new EntryCollection(FooEntry);
		
		collection.add(firstEntry);
		collection.add(secondEntry);
		
		var all: Array<FooEntry> = collection.getAll();
		expect(all).to.include(firstEntry);
		expect(all).to.include(secondEntry);
		
		var retrieved = collection.getById(1);
		expect(retrieved).to.deep.equal(firstEntry);
		retrieved = collection.getById(2);
		expect(retrieved).to.deep.equal(secondEntry);
		
		expect(()=>{ collection.getById(3)}).to.throw();
		
		collection.removeById(1);
		all = collection.getAll();
		expect(all).to.deep.equal([secondEntry]);
	});
});