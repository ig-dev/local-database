import Entry from '../../src/Entry';
import EntryCollection from '../../src/EntryCollection';
import FooEntry from '../doubles/FooEntry';
import Serialized from '../../src/Serialized';

class EntryUtility {
	private entry : FooEntry;
	private serialized : Serialized;
	
	public getEntry() : FooEntry {
		return this.entry;
	}
	
	public getSerialized() : Serialized {
		return this.serialized;
	}
	
	public buildEntry() : void {
		this.spawnNew();
		this.assignProperties();
		this.assignRelationships();
	}
	
	private spawnNew() : void {
		this.entry = new FooEntry();
		this.serialized = new Serialized();
	}
	
	private assignProperties() : void {
		this.setEntryProperty("id", 1);
		this.setEntryProperty("foo", "foo value");
		this.setEntryProperty("bar", "bar value");
		this.setEntryProperty("baz", 5.5);
	}
	
	private setEntryProperty(property : string, value : string | number) : void {
		this.entry[property] = value;
		this.serialized.properties.push({
			property: property,
			value: value
		});
	}
	
	private assignRelationships() : void {
		var relationship = this.createRandomRelationship();
		this.entry.fooEntry = relationship;
		this.serialized.entries.push({
			property: "fooEntry",
			className: "FooEntry",
			id: relationship.id
		});
	} 
	
	private createRandomRelationship() : FooEntry {
		var relationship : FooEntry = new FooEntry();
		relationship.id = Math.floor(Math.random() * 100000);
		return relationship;
	}
}

export default EntryUtility;