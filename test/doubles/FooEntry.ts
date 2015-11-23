"use strict";
import Entry from '../../src/Entry';

class FooEntry extends Entry {
	constructor() {
		super();
	}
	foo: string = "foo value";
	bar: string = "bar value";
	baz: number = 5.5;
}

export default FooEntry;