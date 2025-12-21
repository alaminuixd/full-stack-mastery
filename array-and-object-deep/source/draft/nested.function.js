import _ from 'lodash';
/* function generateTwoRandom(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return { random1, random2 };
}
function randomSum(max) {
  const { random1, random2 } = generateTwoRandom(max);
  return random1 + random2;
}
function randomSub(max) {
  const { random1, random2 } = generateTwoRandom(max);
  return random1 - random2;
}
function randomSquSum(max) {
  const { random1, random2 } = generateTwoRandom(max);
  return random1 * random2 + random1 - random2;
}

console.log(randomSum(10));
console.log(randomSub(10));
console.log(randomSquSum(10)); */

/* function generateTwoRandom(max, cb) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return cb(random1, random2);
}

const sum = generateTwoRandom(100, (r1, r2) => {
  return r1 + r2;
});
const sub = generateTwoRandom(100, (r1, r2) => {
  return r1 - r2;
});
const mult = generateTwoRandom(100, (r1, r2) => {
  return r1 * r2;
});

console.log(sum);
console.log(sub);
console.log(mult);
 */

/* function power(p) {
  return (n) => {
    let result = 1;
    for (let i = 0; i < p; i++) {
      result *= n;
    }
    return result;
  };
}

const toPower = power(4);
console.log(toPower(2)); */
/* function wait(ms) {
  const promise = new Promise((res) => {
    setTimeout(res, ms);
  });
  return promise;
} */
/* const wait = (ms) => new Promise((res) => setTimeout(res, ms));
wait(1000).then(() => console.log('Done in 1000 seconds'));
wait(2000).then(() => console.log('Done in 2000 seconds'));
wait(3000).then(() => console.log('Done in 3000 seconds'));
wait(4000).then((res) => console.log(res)); */
