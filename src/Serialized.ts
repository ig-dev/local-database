"use strict";
import SerializedProperty from './SerializedProperty';
import SerializedRelationship from './SerializedRelationship';

class Serialized {
	properties: Array<SerializedProperty> = [];
	entries: Array<SerializedRelationship> = [];
}

export default Serialized;