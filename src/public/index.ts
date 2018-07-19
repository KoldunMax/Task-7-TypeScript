import fight from "./fight/fight";
import {Fighter} from "./fight/fighter";
import ImprovedFighter from "./fight/improvedFighter";

let fighter = new Fighter(`Fighter`, 200, 2);
let improvedFighter = new ImprovedFighter(`ImprovedFighter`, 400, 4);

let point = [25, 13, 45, 50, 90, 20, 30, 10];

fight(fighter, improvedFighter, ...point);