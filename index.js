function wakeDog(n, b){
  return `Wake ${n} the ${b}`;
}

function leashDog(n, b){
  return `Leash ${n} the ${b}`;
}

function walkToPark(n, b){
  return `Walk to the park with ${n} the ${b}`;
}

function throwFrisbee(n, b){
  return `Throw the frisbee for ${n} the ${b}`;
}

function walkHome(n, b){
  return `Walk home with ${n} the ${b}`;
}

function unleashDog(n, b){
  return `Unleash ${n} the ${b}`;
}

const routine = [
  wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog
];

function exerciseDog(n, b) {
  let temp = []
  for(let i = 0; i < routine.length; i++) {
    temp.push(routine[i](n, b));
  }
  return temp;
}
