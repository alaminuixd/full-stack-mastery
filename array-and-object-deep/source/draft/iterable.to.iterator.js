function numList(arr) {
  if (!Array.isArray(arr)) {
    return 'The item must be an array';
  }
  return {
    [Symbol.iterator]() {
      const number = arr;
      let curIndex = -1;
      return {
        next() {
          return {
            value: number[++curIndex],
            done: curIndex >= number.length,
          };
        },
      };
    },
  };
}
// Here we created an iterable object
const numbers = numList([1, 2, 3, 4, 5]);
/* for (const n of numbers) {
  console.log(n);
}
 */
// We are creating an iterator object from the iterable "numbers" using [Symbol.iterator]()
const iterator = numbers[Symbol.iterator]();
/* console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

function iterableObj(arr) {
  if (!Array.isArray(arr)) {
    throw Error(`${arr} item must be an Array.`);
  }
  return {
    [Symbol.iterator]() {
      let arIndex = -1;
      return () => {
        return {
          value: arr[++arIndex],
          done: arIndex >= arr.length,
        };
      };
    },
  };
}

const iterObj1 = iterableObj[(30, 40, 50)];
console.log(iterObj1);
