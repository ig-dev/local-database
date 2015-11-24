"use strict";
import EntryValue from './EntryValue';

abstract class Entry {
	static className: string;
	[index: string] : EntryValue;
	public id: number;
}

export default Entry;