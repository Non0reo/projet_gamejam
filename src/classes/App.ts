import * as PIXI from 'pixi.js';
import { Balle } from './sprites/Balle';



class App {
	application = new PIXI.Application();
	balle: Balle | undefined;

	constructor() { // par defaut
		this.init()
	}
    
	async init() {
		await this.application.init({ background: '#1099bb', resizeTo: window });
		document.body.appendChild(this.application.canvas);

		this.balle = new Balle(this.application);
		this.application.stage.addChild(this.balle);

		this.application.ticker.add((time) => {
			this.balle?.update(time.deltaTime)
		});
		
	}

}

export {
	App
}