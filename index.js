function baseDog(dogCommand, dogName, dogBreed) {
    let returnString = `${dogCommand} ${dogName} the ${dogBreed}`;
    console.log(returnString)
    return returnString
  }

function wakeDog(dogName, dogBreed) {
    return baseDog( 'Wake', dogName, dogBreed);
  }

  function leashDog(dogName, dogBreed) {
    return baseDog( 'Leash', dogName, dogBreed);
  }

  function walkToPark(dogName, dogBreed) {
    return baseDog('Walk to the park with',dogName,dogBreed);
  }

  function throwFrisbee(dogName, dogBreed) {
    return baseDog( "Throw the frisbee for", dogName, dogBreed)
  }

  function walkHome(dogName, dogBreed) {
    return baseDog( "Walk home with", dogName, dogBreed)
  }

  function unleashDog(dogName, dogBreed) {
    return baseDog( "Unleash", dogName, dogBreed)
  }

let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {

    let returnArray = []
 
    for (let i=0; i<routine.length; i++) {
        returnArray.push( routine[i]( dogName, dogBreed ));
    }

    return returnArray;
}