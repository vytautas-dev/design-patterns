// visitor pattern allows us to add new methods to existing object without modyfying the original object, new functionality will be kept in separate object known as a visitor
// this pattern is useful when we want to extend some functionality of existing objects

function Employee(name, salary) {
	this.name = name;
	this.salary = salary;
}

Employee.prototype = {
	getSalary: function () {
		return this.salary;
	},

	setSalary: function (salary) {
		this.salary = salary;
	},

	// method that takes in visitor function, and gives visitor access to Employee object, so that it can access and manipulate it's properties
	accept: function (visitor) {
		visitor(this); // this is reference to Employee
	},
};

// create new employee
const employee1 = new Employee('John', 5000);
// console.log(Employee.prototype);
console.log(employee1.getSalary()); // 5000

employee1.setSalary(8000);
console.log(employee1.getSalary()); // 8000

// visitor function to modify Employee object
function MultiplySalary(employee) {
	employee.setSalary(employee.getSalary() * 2);
}

employee1.accept(MultiplySalary);
console.log(employee1.getSalary()); // 16000
