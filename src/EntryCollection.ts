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
	
	getById(id: number) {
		var entry: EntryClass;
		for(entry of this.entries){
			if(entry.id === id) {
				return entry;
			}
		}
		throw new Error("Entry with ID " + id + " does not exist.");
	}
	
	removeById(id: number) {
		for(var i = 0; i < this.entries.length; i++) {
			if(this.entries[i].id === id) {
				this.entries.splice(i, 1);
				return;
			}
		}
	}
}

export default EntryCollection;