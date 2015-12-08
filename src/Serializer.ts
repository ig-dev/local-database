"use strict";
import Entry from "./Entry";
import EntryCollection from "./EntryCollection";
import Serialized from "./Serialized";
import EntryValue from "./EntryValue";


class Serializer {
	private entry: Entry;
	private serialized : Serialized;
	private currentPropertyName: string;
	private currentValue: EntryValue;
	
	serialize(entry: Entry) : Serialized {
		this.entry = entry;
		this.serialized = new Serialized();
		this.serializeEntryProperties();
		return this.serialized;
	}
	
	private serializeEntryProperties() : void {
		for (this.currentPropertyName in this.entry) {
			this.currentValue = this.entry[this.currentPropertyName];
			this.serializeCurrentProperty();
		}
	}
		
	serializeCurrentProperty() {
		if(this.isRelationship(this.currentValue)) {
			this.serializeRelationship(<Entry> this.currentValue);
		}
		else if (this.isCollection(this.currentValue)) {
			this.serializeCollection(<EntryCollection<Entry>> this.currentValue);
		}
		else {
			this.serializeProperty(this.currentValue)
		}
	}
	
	private isRelationship(value: EntryValue) {
		var isRelationship: boolean = false;
		if(value instanceof Entry) {
			isRelationship = true;
		}
		return isRelationship;
	}

	private serializeRelationship (relationship: Entry) {
		this.serialized.entries.push({
			property: this.currentPropertyName,
			className: Object.getPrototypeOf(relationship).constructor.className,
			id: relationship.id
		});
	}
	
	private isCollection(value: EntryValue) {
		var isCollection: boolean = false;
		if(value instanceof EntryCollection) {
			isCollection = true;
		}
		return isCollection;
	}
	
	private serializeCollection (collection: EntryCollection<Entry>) {
		this.serialized.collections.push({
			property: this.currentPropertyName,
			className: collection.getClassName(),
			ids: collection.getIds()
		});
	}
	
	private serializeProperty(propertyValue : EntryValue) {
		this.serialized.properties.push({
			property: this.currentPropertyName,
			value: propertyValue
		});
	}
}

export default Serializer;