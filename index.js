//additionally: Each function should return the string that it creates. That is, we should create a String, console.log() it, and return that String.

function wakeDog(dogName, dogBreed) {
  
  return `Wake ${dogName} the ${dogBreed}`;
}
function leashDog(a, b) {
 
  console.log(`Leash ${a} the ${b}`);
  let string = `Leash ${a} the ${b}`;
  return string
}
function walkToPark(a, b) {

  return `Walk to the park with ${a} the ${b}`; 
}
function throwFrisbee(a, b) {
  
  return `Throw the frisbee for ${a} the ${b}`;
}
function unleashDog(a, b) {

  return `Unleash ${a} the ${b}`;
}
function walkHome(a, b) {
  
  return `Walk home with ${a} the ${b}`;
}

  let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
  ]

function exerciseDog(a,b) {
  
   return routine.map(element => element(a,b));

   
}


