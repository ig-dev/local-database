"use strict";

class StringRepository {
	private filePath : string;
	private store: {[index: string] : string};
	
	constructor(filePath: string){
		this.filePath = filePath;
		this.store = { };
	}
	
	public async saveByKey(key: string, value : string) : Promise<void> {
		this.store[key] = value;
	}
	
	public async fetchByKey(key: string) : Promise<string> {
		return this.store[key];
	}
}

export default StringRepository;