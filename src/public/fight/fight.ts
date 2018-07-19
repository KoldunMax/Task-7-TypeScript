
export default async function fight(fighter, improvedFighter, ...points) {
    try {
      let countOfHits = points.length;
      let resultOfFight = false;
  
      for (let numberOfHit = 0; numberOfHit < countOfHits; numberOfHit++) {
        if (numberOfHit % 2 == 0) {
          fighter.hit(improvedFighter, points[numberOfHit]);
          if (isKnockout(improvedFighter)) {
            resultOfFight = await improvedFighter.knockout();
            console.log(resultOfFight);
            break;
          }
        } else {
          improvedFighter.doubleHit(fighter, points[numberOfHit]);
          if (isKnockout(fighter)) {
            resultOfFight = await fighter.knockout();
            console.log(resultOfFight);
            break;
          }
        }
        if (!resultOfFight && countOfHits - 1 == numberOfHit) {
          console.log(
            `Draw, ${fighter.name} has ${fighter.health} and ${
              improvedFighter.name
            } has ${improvedFighter.health}`
          );
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  function isKnockout(fighter) {
    if (fighter.health <= 0) {
      console.log(`${fighter.name} is in knockout`);
      return true;
    }
    return false;
  }
  