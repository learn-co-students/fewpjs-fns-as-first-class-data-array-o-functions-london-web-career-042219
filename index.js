const routines = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
};

function leashDog(dogName, dogBreed){
    console.log(`Leash ${dogName} the ${dogBreed} `)
    return `Leash ${dogName} the ${dogBreed} `
};

function walkToPark(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed} to the park`)
    return `Walk ${dogName} the ${dogBreed} to the park`
};

function throwFrisbee(dogName, dogBreed){
    console.log(`Throw ${dogName} the ${dogBreed} a frisbee`)
    return `Throw ${dogName} the ${dogBreed} a frisbee`
};

function walkHome(dogName, dogBreed){
    console.log(`Walk ${dogName} the ${dogBreed} home`)
    return `Walk ${dogName} the ${dogBreed} home`
};

function unleashDog(dogName, dogBreed){
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return `Unleash ${dogName} the ${dogBreed}`
};



function Exercisedog(dogName, dogBreed) {
    return routines.map(routine => routine(dogName, dogBreed))
};

Exercisedog("Pluto", "husky");