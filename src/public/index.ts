import fight from "./fight/fight";
import Fight from "./fight/fighter";
import ImprovedFighter from "./fight/improvedFighter";

let fighter = new Fight();
let improvedFighter = new ImprovedFighter();

let point = [25, 13, 45, 50, 90, 20, 30, 10];

fight(fighter, improvedFighter, ...point);