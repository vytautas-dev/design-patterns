// Flyweight Design Pattern jest strukturalnym wzorcem projektowym. Stosujemy go do tworzenia bardzo dużej liczby identycznych lub podobnych obiektów
//cele:
//    * jak największe zmniejszenie wykorzystywanej pamięci zmarnowanej na obsługę wielu podobnych obiektów,
//    *  wykorzystanie współdzielenia obiektów, czyli nie tworzenie każdego obiektu od początku, tylko bazowanie na tych już utworzonych.
// Przykładem wykorzystania wzorca w codziennym użytkowaniu jest pamięć cache przeglądarki. Raz odwiedzona strona przy kolejnej wizycie nie
// będzie wszystkiego pobierała od nowa a korzystała z zasobów zapisanych w pamięci podręcznej. Dzięki temu strona działa dużo szybciej.

// https://frontstack.pl/flyweight-design-pattern/

class CarFlyWeight {
  // Flyweight (pyłek) - powtarzalna część w każdym obiekcie
  // zawierającym dane na temat samochodu
  constructor(company, model, fuel) {
    this.company = company;
    this.model = model;
    this.fuel = fuel;
  }
}

class FlyweightFactory {
  //tutaj trzymamy wszystkie stworzone "pyłki" w celu reużycia w przyszłości
  constructor() {
    this.flyweights = [];
  }

  get(company, model, fuel) {
    //sprawdzamy czy stworzyliśmy już kiedyś dany "pyłek"
    //Jeżeli nie, tworzymy nowy i zapisujemy na póxniej
    const id = `${company}/${model}/${fuel}`;
    if (!this.flyweights[id]) {
      this.flyweights[id] = new CarFlyWeight(company, model, fuel);
    }
    return this.flyweights[id];
  }

  getCount() {
    //metoda zwracająca liczbę aktualni zapisanych pyłków
    return Object.keys(this.flyweights).length;
  }

  getAll() {
    //metoda zwracająca wszystkie zapisane pyłki
    return this.flyweights;
  }
}

const flyWeightFactory = new FlyweightFactory();

//klasa służąca do tworzenia nowych samochodów
class Car {
  constructor(company, model, fuel, price, vin) {
    this.flyweight = flyWeightFactory.get(company, model, fuel);
    this.price = price;
    this.vin = vin;
  }
}

// W tym przykładzie wszystkie samochody będziemy trzymać w jednej liście
// i do tej listy będziemy dokładać kolejne obiekty

class CarsList {
  constructor() {
    this.cars = {};
  }

  // dodajemy nowy samochód do listy
  add(company, model, fuel, price, vin) {
    this.cars[vin] = new Car(company, model, fuel, price, vin);
  }

  // pobieramy jeden samochód z listy
  get(vin) {
    return this.cars[vin];
  }

  // pobieramy wszystkie samochody z listy
  getAll() {
    return this.cars;
  }

  // pobieramy liczbę wszystkich samochodów
  getCount() {
    return Object.keys(this.cars).length;
  }
}

// Inicjujemy listę samochodów
let cars = new CarsList();

// cars.add(company, model, fuel, price, vin);
cars.add("Ford", "Focus", "Gasoline", "20000", "5XYKT3A17BG157871");
cars.add("Ford", "Focus", "Gasoline", "40000", "JH4KA7660NC003110");
cars.add("Ford", "Focus", "Gasoline", "30000", "JNKCV61E09M303716");
cars.add("Ford", "Focus", "Diesel", "25000", "2C4GM68475R667819");
cars.add("Ford", "Focus", "Diesel", "27000", "JH4KA3140JC003021");
cars.add("Audi", "A4", "Diesel", "32000", "1B7GL22Z31S190315");
cars.add("Audi", "A4", "Diesel", "28000", "JH4KA7532NC036794");
cars.add("Audi", "A4", "Diesel", "42000", "JH4KA3270LC001300");

console.log(cars.getCount()); // 8 -> tyle stworzyliśmy samochodów
console.log(flyWeightFactory.getCount()); // 3 -> tyle mamy pyłków

console.log(flyWeightFactory.getAll()); // zobacz screen nr 1 poniżej
console.log(cars.getAll()); // zobacz screen nr 2 poniżej

// Sprawdzamy czy na pewno korzystamy z tego samego obiektu
const car1 = cars.get("5XYKT3A17BG157871");
const car2 = cars.get("JH4KA7660NC003110");

// Dwa obiekty współdzielą ten sam obiekt.
console.log(car1.flyweight === car2.flyweight); // true (ten sam obiekt w pamięci)
