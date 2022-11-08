//Composition over Inheritance
//Object oriented programming has been around for a very long time and is one of the most
// popular programming paradigms, especially in academic curriculum. Unfortunately, pure
// object oriented programming is not the best solution to many problems. This is why in
// certain industries, like game development, the idea of composition has risen in popularity
// to overtake inheritance from object oriented programming.

function flyingSwimmingMonserCreator(name, weight) {
  const monster = { name, weight };

  return {
    ...monster,
    ...swimmer(name),
    ...flyer(name, weight),
  };
}

function swimmer(name) {
  return { swim: () => console.log(`Monster called ${name} can swim.`) };
}

function flyer(name, weight) {
  return {
    fly: () =>
      console.log(
        `Monster called ${name} can fly despite his weight-${weight}kg.`
      ),
  };
}

const monsty = flyingSwimmingMonserCreator("Kitman", 80);
console.log(monsty);
monsty.swim();
monsty.fly();
