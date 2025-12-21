// Sequence to output: 1, 4, 9, 16, 25
// function squared() {
//   let n = 0;
//   return {
//     next() {
//       n++;
//       if (n <= 5) {
//         return {
//           value: n * n,
//           done: false,
//         };
//       }
//       return {
//         value: undefined,
//         done: true,
//       };
//     },
//   };
// }

// const iterator1 = squared();
// console.log(iterator1.next());

// function squared2(max) {
//   return {
//     [Symbol.iterator]() {
//       let n = 0;
//       return {
//         next() {
//           n++;
//           if (n <= max) {
//             return { value: n * n, done: false };
//           }
//           return { value: undefined, done: true };
//         },
//       };
//     },
//   };
// }
// const [a, b, c, d, e] = squared2(5);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

class NumberList {
  constructor(numArray) {
    if (!Array.isArray(numArray)) {
      throw Error({ message: 'Item must be an array' });
    }
    this.numbers = numArray;
  }
  [Symbol.iterator]() {
    const numbers = this.numbers;
    let currentIndex = -1;
    return {
      next() {
        return {
          value: numbers[++currentIndex],
          done: currentIndex >= numbers.length,
        };
      },
    };
  }
}

const list1 = new NumberList([1, 2, 3, 4, 5]);
const iterator = list1[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
