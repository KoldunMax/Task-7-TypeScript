import {Fighter, IFighter} from "./fighter";

export interface I_ImprovedFighter extends IFighter{
    // ssdoubleHit: (enemy:ImprovedFighter, point:number) => void;
}

export class ImprovedFighter extends Fighter implements I_ImprovedFighter {
  constructor(name: string, health: number, power:number) {
    super(name, health, power);
  }

  doubleHit(enemy:Fighter, point:number):void {
    super.hit(enemy, point * 2);
  }
}
