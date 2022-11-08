// Open/Closed Principle
// "When you write a class or function or library you should do it in a way that anyone else can easily build on to it, but not change it's core elements."
// In short our function printQuiz should be open to adding new questions but closed to changing it's core functionality, when we change code outside our function, we should never be forced to also change code inside our function
// in this example, when we want to add a new question type, we will violate open/closed principle, because we would need to visit our printQuiz function and add new type into it

// <----- Bad example ----->
function printQuiz(questions) {
	questions.forEach(question => {
		console.log(question.description);

		switch (question.type) {
			case 'boolean':
				console.log('1. True');
				console.log('2. False');
				break;
			case 'multipleChoice':
				question.options.forEach((option, index) => {
					console.log(`${index + 1}. ${option}`);
				});
				break;
			case 'text':
				console.log('Answer: _____');
			default:
				break;
		}
		console.log('');
	});
}

const questions = [
	{ type: 'boolean', description: 'boolean question' },
	{
		type: 'multipleChoice',
		description: 'multipleChoice question',
		options: ['opt1', 'opt2', 'opt3', 'opt4'],
	},
	{ type: 'text', description: 'text question' },
];

printQuiz(questions);

// <----- Good example ----->
// Now when we want to add new question type, all we need to do is create class for that question and add it to questionsNew array, we don't have to modify printQuizNew at all
class BooleanQuestion {
	constructor(description) {
		this.description = description;
	}

	printQuestionChoices() {
		console.log('1. True');
		console.log('2. False');
	}
}

class MultipleChoiceQuestion {
	constructor(description, options) {
		this.description = description;
		this.options = options;
	}

	printQuestionChoices() {
		this.options.forEach((option, index) => {
			console.log(`${index + 1}. ${option}`);
		});
	}
}

class TextQuestion {
	constructor(description) {
		this.description = description;
	}

	printQuestionChoices() {
		console.log('Answer: _____');
	}
}

class RangeQuestion {
	constructor(description) {
		this.description = description;
	}

	printQuestionChoices() {
		console.log('Minumum: _____');
		console.log('Maximum: _____');
	}
}

function printQuizNew(questions) {
	questions.forEach(question => {
		console.log(question.description);
		question.printQuestionChoices();
		console.log('');
	});
}

const questionsNew = [
	new BooleanQuestion('boolean question'),
	new MultipleChoiceQuestion('multipleChoice question', [
		'opt1',
		'opt2',
		'opt3',
		'opt4',
	]),
	new TextQuestion('text question'),
	new RangeQuestion('range question'),
];

printQuizNew(questionsNew);
