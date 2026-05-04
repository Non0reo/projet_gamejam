import * as PIXI from 'pixi.js';

class App {
	application = new PIXI.Application();

	constructor() { // par defaut
		/* console.log(this) */
	}
    
	init() {
		
	}

	salut(value: number) {
		return value + 7;
	}

}

export {
	App
}