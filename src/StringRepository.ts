export default class StringRepository {
	private name : string;
	
	constructor(name: string){
		this.name = name;
	}
	
	public saveByKey(key: string, value : string) : void {
		
	}
	
	public fetchByKey(key: string) : string {
		return "";
	}
}