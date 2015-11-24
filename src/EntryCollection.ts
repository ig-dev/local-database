"use strict"
import Entry from './Entry';

class EntryCollection <EntryClass extends Entry> {
	public className: string;
	private entries: Array<EntryClass> = [];
	
	constructor(EntryClass: { new(): EntryClass, className: string} ) {
		this.className = EntryClass.className;
	}
	
	add(entry: EntryClass) : void {
		this.entries.push(entry);
	}
	
	getAll() : Array<EntryClass> {
		return this.entries;
	}
}

export default EntryCollection;