import * as PIXI from 'pixi.js';

const texture = await PIXI.Assets.load('balle.png');

class Balle extends PIXI.Sprite {
    application: PIXI.Application;
    angleRotation: number;
    velocity: PIXI.Point = new PIXI.Point();

    constructor(application: PIXI.Application) {
        super(texture); // Appelle les fonctions de l'objet parents
        
        this.application = application;

        // container.x = app.screen.width / 2;
        // container.y = app.screen.height / 2;
        this.x = application.screen.width / 2;
        this.y = application.screen.height / 2;
        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;

        this.angleRotation = Math.random() * 2 * Math.PI;
        //this.rotation = this.angleRotation;

        this.velocity.set(
            Math.cos(this.angleRotation) * 5,
            Math.sin(this.angleRotation) * 5
        );
    }

    

    update(deltaTime: number) {

        if(this.x >= this.application.screen.width - this.width / 2 || this.x <= this.width / 2) {
            this.velocity.x *= -1;
        }

        if(this.y >= this.application.screen.height - this.height / 2 || this.y <= this.height / 2) {
            this.velocity.y *= -1;
        }


        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;
    }
}


export {
    Balle
}