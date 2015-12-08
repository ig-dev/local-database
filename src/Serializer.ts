"use strict";
import Entry from "./Entry";
import EntryCollection from "./EntryCollection";
import Serialized from "./Serialized";


class Serializer {
	serialize(entry: Entry) : Serialized {
		var serialized : Serialized = new Serialized();
		var key: string;
		for (key in entry) {
			if(entry[key] instanceof Entry) {
				var relationship : Entry = <Entry> entry[key];
				serialized.entries.push({
					property: key,
					className: Object.getPrototypeOf(relationship).constructor.className,
					id: relationship.id
				});
			}
			else if (entry[key] instanceof EntryCollection) {
				var collection : EntryCollection<Entry> = <EntryCollection<Entry>> entry[key];
				serialized.collections.push({
					property: key,
					className: collection.getClassName(),
					ids: collection.getIds()
				});
			}
			else {
				serialized.properties.push({
					property: key,
					value: entry[key]
				});
			}

		}
		return serialized;
	}
}

export default Serializer;