// Liskov Substitution Principle
// "Simply put, any time you have a sub-type of something, that subtype should be 100% compatible with the original thing. This is usually not an issue since a subtype is a specialized version of the more generic thing."
// in short when we have a function that accepts a class, every single subclass of that class must also work properly with that function

// <----- Bad example ----->
// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}

// 	setWidth(width) {
// 		this.width = width;
// 	}

// 	setHeight(height) {
// 		this.height = height;
// 	}

// 	area() {
// 		return this.width * this.height;
// 	}
// }

// class Square extends Rectangle {
// 	setWidth(width) {
// 		this.width = width;
// 		this.height = width;
// 	}

// 	setHeight(height) {
// 		this.height = height;
// 	}
// }

// function increaseRectangleWidth(rectangle) {
// 	rectangle.setWidth(rectangle.width + 1);
// }

// const rectangle = new Rectangle(10, 2);
// // our square is not compatible with increaseRectangleWidth function, out square cannot be substituted in place of rectangle
// const square = new Square(5, 5);

// increaseRectangleWidth(rectangle);
// increaseRectangleWidth(square);

// console.log(rectangle.area());
// console.log(square.area());

//
//
// <----- Bad example ----->
// class Bird {
// 	fly() {
// 		console.log('I can fly');
// 	}
// }

// class Duck extends Bird {
// 	quack() {
// 		console.log('I can quack');
// 	}
// }

// class Penguin extends Bird {
// 	fly() {
// 		throw new Error('cannot fly');
// 	}

// 	swim() {
// 		console.log('I can swim');
// 	}
// }

// function makeBirdFly(bird) {
// 	bird.fly();
// }

// const duck = new Duck(); // duck works just fine
// const penguin = new Penguin(); // but penguin is not compatible

// makeBirdFly(duck);
// makeBirdFly(penguin);

//
//
// <----- Good example ----->
class FlyingBird {
	fly() {
		console.log('I can fly');
	}
}

class SwimmingBird {
	swim() {
		console.log('I can swim');
	}
}

class Duck extends FlyingBird {
	quack() {
		console.log('I can quack');
	}
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
	bird.fly();
}

function makeSwimmingBirdSwim(bird) {
	bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
