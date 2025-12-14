function myReduce(arr, cb, initial) {
  let result = initial;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i], i, arr);
  }
  return result;
}

const arr1 = [1, 2, "", false, 3, NaN, false, 4, 5, NaN, 6];
const result = myReduce(
  arr1,
  (acc, cur, i, array) => {
    if (cur) {
      acc.push(cur * 2);
    }
    // acc.push(cur);
    return acc;
  },
  []
);

console.log(result);
