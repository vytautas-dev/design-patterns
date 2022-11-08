//A factory function can be defined as a function that creates an object and returns it. It is similar
// to constructor functions/class functions. The factory function is a very useful tool in JavaScript
// since it returns the object of any class directly.

//Factory Function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const obj = createCircle(5);
console.log(obj);
