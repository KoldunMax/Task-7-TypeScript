import {Fighter, IFighter} from "./fighter";

interface I_ImprovedFighter extends IFighter{
    doubleHit: (enemy:ImprovedFighter, point:number) => void;
}

export default class ImprovedFighter extends Fighter implements I_ImprovedFighter {
  constructor(name: string, health: number, power:number) {
    super(name, health, power);
  }

  doubleHit(enemy:Fighter, point:number):void {
    super.hit(enemy, point * 2);
  }
}
