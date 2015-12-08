"use strict";
import SerializedProperty from './SerializedProperty';
import SerializedRelationship from './SerializedRelationship';
import SerializedCollection from './SerializedCollection';

class Serialized {
	properties: Array<SerializedProperty> = [];
	entries: Array<SerializedRelationship> = [];
	collections: Array<SerializedCollection> = [];
}

export default Serialized;