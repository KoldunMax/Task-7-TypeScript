export default class Fighter {
    constructor(name = `Fighter`, health = 200, power = 2) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    setDemage(damage = 0) {
      this.health = this.health - damage;
      console.log(this.health);
    }
  
    hit(enemy, point) {
      let demage = this.power * point;
      enemy.setDemage(demage);
    }
  
    knockout() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`time is over`);
          resolve(`${this.name} is lost`);
        }, 500);
      });
    }
  } // Create class Fighter
  