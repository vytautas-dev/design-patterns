// observer design pattern is a pattern where we declare one to many relationship
// observers will watch the Subject and wait for some kind of trigger from Subject before they run (similar to event listener)

// Subject will need to keep track of all the observers that are currently looking at it
function Subject() {
	this.observers = []; // array of observers
}

// add methods to Subject
Subject.prototype = {
	// add observer to the array of observers
	subscribe: function (observer) {
		this.observers.push(observer);
	},

	// remove observer from the array of observers
	unsubscribe: function (observerToRemove) {
		this.observers = this.observers.filter(observer => {
			if (observer != observerToRemove) {
				return observer;
			}
		});
	},

	// function to notify every observer that is currently subscribed to Subject
	fire: function () {
		this.observers.forEach(observer => {
			observer.call();
		});
	},
};

const subject = new Subject();

function Observer1() {
	console.log('Observer 1 triggered');
}
function Observer2() {
	console.log('Observer 2 triggered');
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.fire(); // Observer 1 triggered, Observer 2 triggered

subject.unsubscribe(Observer2); // Observer 1 triggered

subject.fire();
