import Fighter from "./fighter";

export default class ImprovedFighter extends Fighter {
  constructor(name = `ImprovedFighter`, health = 400, power = 4) {
    super(name, health, power);
  }

  doubleHit(enemy, point) {
    this.hit(enemy, point * 2);
  }
}
