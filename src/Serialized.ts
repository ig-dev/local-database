import SerializedProperty from './SerializedProperty';

class Serialized {
	properties: {
		[index: string] : SerializedProperty
	}
}

export default Serialized;