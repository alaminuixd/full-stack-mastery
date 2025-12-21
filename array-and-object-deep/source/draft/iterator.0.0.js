// const channel = 'Stack Learner';
// const theIterator = channel[Symbol.iterator]();
// console.log(theIterator.next());

// for (let v of channel) {
//   console.log(v);
// }

// while (true) {
//   const data = theIterator.next();
//   if (data.done) {
//     break;
//   }
//   console.log(data.value);
// }

const range = {
  start: 0,
  stop: 50,
  step: 5,
};

range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;
  return {
    next() {
      const o = {
        value: current,
        done: current > stop,
      };
      current += step;
      return o;
    },
  };
};
const rangeIterator = range[Symbol.iterator]();
/* console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next()); */
for (const x of range) {
  console.log(x);
}
console.log(range);
