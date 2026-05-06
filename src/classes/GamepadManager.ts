
export class GamepadManager {
  gamepads: Gamepad[] = [];

  constructor() {
    window.addEventListener("gamepadconnected", (e) => this.initGamepad(e.gamepad));
  }

  update(_deltaTime?: number) {
    this.handleGamepad();
  }

  private initGamepad(gamepad: Gamepad) {
    console.log(gamepad);
    this.gamepads.push(gamepad);
  }

  private handleGamepad() {
    if(!this.gamepads?.length) return; //Return if no gamepad

    this.gamepads.forEach(gamepad => {
      // console.log(gamepad.id)
      console.log(gamepad.buttons[0])

      if(gamepad.buttons[0].pressed)
        console.log('pressed')
    })
  }
}