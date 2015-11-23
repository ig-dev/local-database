"use strict";
import Entry from "./Entry";
import Serialized from "./Serialized";

class Serializer {
	serialize(entry: Entry) : Serialized {
		var serialized : Serialized = new Serialized();
		var key: string;
		for (key in entry) {
			serialized.properties.push({
				property: key,
				value: entry[key]
			});
		}
		return serialized;
	}
}

export default Serializer;