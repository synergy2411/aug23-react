import getFortune, { getLuckyNumber, getWorkout } from "./utils/fortune";

import db from "./db.json";

// import "./css/styles.css";

console.log(db);

console.log(getFortune());

console.log("Lucky Number : ", getLuckyNumber());

console.log("Today task  : ", getWorkout());
