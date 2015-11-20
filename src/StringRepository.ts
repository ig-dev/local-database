"use strict";

class StringRepository {
	private name : string;
	
	constructor(name: string){
		this.name = name;
	}
	
	public saveByKey(key: string, value : string) : void {
		
	}
	
	public async fetchByKey(key: string) : Promise<string> {
		return "";
	}
}

export default StringRepository;