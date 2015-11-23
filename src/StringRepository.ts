/// <reference path="./typings/tsd.d.ts" />
"use strict";

import * as fs from 'fs';

class StringRepository {
	private filePath : string;
	private store: {[index: string] : string};
	
	constructor(filePath: string){
		this.filePath = filePath;
		this.initializeStore()
	}
	
	private initializeStore() : void {
		try {
			this.loadStorageFile()
		} catch (error) {
			this.initializeEmptyStore();
		}
	}
	
	private loadStorageFile() : void {
		var fileContent: string = fs.readFileSync(this.filePath, 'utf8');
		this.store = JSON.parse(fileContent);
	}

	private storageFileExists () : boolean {
		var fileExists: boolean = true;
		try {
			fs.accessSync(this.filePath)
			return fileExists;
		} catch (error) {
			fileExists = false;
			return fileExists;
		}
	}
		
	private initializeEmptyStore() {
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
	
	private persistAll() : Promise<void> {
		return new Promise<void>((resolve, reject) => {
			var fileContent: string = JSON.stringify(this.store);
			fs.writeFileSync(this.filePath, fileContent);
			return resolve();
		});
	}
}

export default StringRepository;