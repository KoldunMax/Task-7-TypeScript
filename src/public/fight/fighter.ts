export interface IFighter {
    name: string;
    health: number;
    setDemage: (damage: number) => void;
    hit: (enemy: Fighter, point: number) => void;
    knockout: () => any;
}

export class Fighter implements IFighter{
     name: string
     health: number
     power: number

    constructor(name: string, health: number, power: number) {
        this.name = name;
        this.health = health;
        this.power = power;
    }
  
    setDemage(damage: number): void {
      this.health -= damage;
      console.log(this.health);
    }
  
    hit(enemy:Fighter, point:number):void {
      let demage = this.power * point;
      enemy.setDemage(demage);
    }
  
    knockout():any {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`time is over`);
          resolve(`${this.name} is lost`);
        }, 500);
      });
    }
  } // Create class Fighter
  