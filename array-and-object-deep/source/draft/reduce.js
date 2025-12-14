/**
 * Map returns the same array with same length
 * Reduce returns is unknown
 */
const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
const merge = numbers.reduce((ac, cr) => ac + cr.toString(), "");

const mergeTruthy1 = numbers.reduce(
  (ac, cr) => cr && (ac += cr.toString()),
  ""
);

const mergeTruthy2 = numbers.reduce((ac, cr, index) => {
  if (cr) {
    ac += cr.toString() + (index < numbers.length - 1 ? ", " : "");
  }
  return ac;
}, "");

// we are adding comma for every element and turning the result into an array
const mergeTruthy3 = numbers.reduce((ac, cr, index) => {
  if (index === 0) ac += "[";
  if (cr) {
    ac += cr.toString() + (index < numbers.length - 1 ? ", " : "");
  }
  if (index === numbers.length - 1) ac += "]";
  return ac;
}, "");

const toFilteredArray = numbers.reduce((acc, curr) => {
  if (curr) {
    acc.push(curr.toString());
  }
  return acc;
}, []);

console.log(merge);
console.log(mergeTruthy1);
console.log(mergeTruthy2);
console.log(mergeTruthy3);
console.log(toFilteredArray);
