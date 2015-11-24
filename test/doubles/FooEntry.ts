"use strict";
import Entry from '../../src/Entry';

class FooEntry extends Entry {
	static className: string = "FooEntry";
	
	id: number = 1;
	foo: string = "foo value";
	bar: string = "bar value";
	baz: number = 5.5;
	fooEntry: FooEntry;
	
	constructor() {
		super();
	}
}

export default FooEntry;