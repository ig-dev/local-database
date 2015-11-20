"use strict";

class StringRepository {
	private filePath : string;
	
	constructor(filePath: string){
		this.filePath = filePath;
	}
	
	public saveByKey(key: string, value : string) : void {
		
	}
	
	public async fetchByKey(key: string) : Promise<string> {
		return "";
	}
}

export default StringRepository;