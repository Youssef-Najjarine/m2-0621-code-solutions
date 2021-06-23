function ExampleConstructor() {

}
const ExampleConstructorVariable = new ExampleConstructor();

console.log('value of prototype property of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor: ', typeof ExampleConstructor.prototype);
console.log('value of ExampleConstructorVariable: ', ExampleConstructorVariable);
const instanceOfVar = console.log(ExampleConstructorVariable instanceof ExampleConstructor);
