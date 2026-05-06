import * as PIXI from 'pixi.js';
import { Balle } from './sprites/Balle';
import { GamepadManager } from './GamepadManager';



class App {
	application: PIXI.Application = new PIXI.Application();
	gamepadManager: GamepadManager = new GamepadManager();
	balle: Balle | undefined;

	constructor() { // par defaut
		this.init()
	}
    
	async init() {
		await this.application.init({ background: '#1099bb', resizeTo: window });
		document.body.appendChild(this.application.canvas);

		this.balle = new Balle(this.application);
		this.application.stage.addChild(this.balle);

		this.application.ticker.add((time) => this.update(time.deltaTime));		
	}

	update(deltaTime: number) {
		this.gamepadManager.update();
		this.balle?.update(deltaTime);
	}

}

export {
	App
}