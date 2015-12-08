"use strict";
import Entry from '../../src/Entry';
import EntryCollection from '../../src/EntryCollection';

class FooEntry extends Entry {
	static className: string = "FooEntry";
	
	id: number = 1;
	foo: string = "foo value";
	bar: string = "bar value";
	baz: number = 5.5;
	fooEntry: FooEntry;
	fooCollection: EntryCollection<FooEntry>;
	
	constructor() {
		super();
	}
}

export default FooEntry;