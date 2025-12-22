/* function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = myGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

function* generator2(start = 0, stop = 20, setp = 5) {
  for (let i = 0; i <= stop; i += setp) {
    yield i;
  }
}

const range = generator2();

function* generateId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
const range2 = generateId();
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
console.log(range2.next());
