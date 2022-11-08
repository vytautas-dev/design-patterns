// Strategy is a behavioral design pattern that lets you define a family of algorithms,
// put each of them into a separate class, and make their objects interchangeable.

const car = 'Mercedes';

function Diesel() {
    this.refuel = () => {               // <--- Create our strategy
        //some logic...
        return 'Diesel was refueled!'
    }
}

function Gasoline() {
    this.refuel = () => {              // <--- Create our strategy
        //some logic...
        return 'Gasoline was refueled!'
    }
}

function Refueling() {
    this.fuelType = '';
    this.setFuelType = (type) => {    // <--- Strategy pattern
        this.fuelType = type;
    };
    this.refuel = (car) => {
        return this.fuelType.refuel(car);
    }
}

const diesel = new Diesel();        //<--- Create instance of our strategy
const gasoline = new Gasoline();    //<--- Create instance of our strategy

const refueling = new Refueling();

refueling.setFuelType(diesel);
console.log('Diesel strategy:', refueling.refuel(car));

refueling.setFuelType(gasoline);
console.log('Gasoline strategy:', refueling.refuel(car));