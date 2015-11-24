"use strict";
import Entry from "./Entry";
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