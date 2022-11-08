//The builder pattern is one of the best creational design patterns for creating complex objects without
// complicating your constructors or code. The best part about the builder pattern is that the new changes
// to JavaScript allow us to create extremely concise builders compared to the traditional way of creating builders.
//The builder design pattern is a creational pattern that enables you to construct complex objects simply and more declaratively.
//The goal of builder pattern is seperate a object's construction from its representation.
//Construct object piece by piece without having worry about specifically how its build

// never use to create object
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// our builder to create object
// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name);
//   }
//
//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }
//
//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }
//
//   setAddress(address) {
//     this.user.address = address;
//     return this;
//   }
//
//   build() {
//     return this.user;
//   }
// }
//
// let builder = new UserBuilder("Bob")
//   .setAge(25)
//   .setPhone(3434343434)
//   .setAddress("Happy street, San Francisco")
//   .build();
//
// console.log(builder);

//2 option to create builder

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone, address = "none" } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", {
  age: 10,
  phone: "2323232",
  address: new Address("1", "Main"),
});
console.log(user);
