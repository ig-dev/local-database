"use strict";
import EntryValue from './EntryValue';

abstract class Entry {
	[index: string] : EntryValue;
	public id: number;
}

export default Entry;