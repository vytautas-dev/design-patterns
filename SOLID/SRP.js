// Single Responsibility Principle
// the idea of this principle that all of our classes, functions or modules should have one single responsibility - have one reason that it should change
// the code below violates this principle, because it has 2 reasons to change
// 1. how we track our calories
// 2. how we notify users about exceeding calories

class CalorieTracker {
	constructor(maxCalories) {
		this.maxCalories = maxCalories;
		this.currentCalories = 0;
	}

	addCalories(calorieCount) {
		this.currentCalories += calorieCount;
		console.log('Current calories:', this.currentCalories);

		if (this.currentCalories > this.maxCalories) {
			this.logCalorieSurplus();
		}
	}

	logCalorieSurplus() {
		console.log('Max calories exceeded');
	}
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.addCalories(500);
calorieTracker.addCalories(1000);
calorieTracker.addCalories(700);

// <----- ----->
import logMessage from './SRPLogger.js';

// now we have only one reason to change CalorieTracker
class CalorieTrackerFixed {
	constructor(maxCalories) {
		this.maxCalories = maxCalories;
		this.currentCalories = 0;
	}

	addCalories(calorieCount) {
		this.currentCalories += calorieCount;
		console.log('Current calories:', this.currentCalories);

		if (this.currentCalories > this.maxCalories) {
			logMessage('Max calories exceeded');
		}
	}
}

const calorieTrackerFixed = new CalorieTrackerFixed(2000);
calorieTrackerFixed.addCalories(500);
calorieTrackerFixed.addCalories(1000);
calorieTrackerFixed.addCalories(700);
