/// <reference path="./typings/tsd.d.ts" />
"use strict";

import * as fs from 'fs';

class StringRepository {
	private filePath : string;
	private store: {[index: string] : string};
	
	constructor(filePath: string){
		this.filePath = filePath;
		this.store = { };
	}
	
	public async saveByKey(key: string, value : string) : Promise<void> {
		this.store[key] = value;
		await this.persistKey(key);
	}
	
	public async fetchByKey(key: string) : Promise<string> {
		var result: string = this.store[key];
		return Promise.resolve(result);
	}
	
	private async persistKey(key: string) : Promise<void> {
		await this.persistAll();
	}
	
	private async persistAll() : Promise<void> {
		return;
	}
}

export default StringRepository;