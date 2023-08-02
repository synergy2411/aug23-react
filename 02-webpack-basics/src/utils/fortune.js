const LUCKY_NUMBER = Math.round(Math.random() * 100);

export function getLuckyNumber() {
  return LUCKY_NUMBER;
}

export function getWorkout() {
  return "Run 5 miles today!";
}

const getFortune = () => "Today is your lucky day!";

export default getFortune;
