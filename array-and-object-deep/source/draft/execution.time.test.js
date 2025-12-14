const array = [];
const arObj = {};

for (let i = 0; i < 5000000; i++) {
  const o = (arObj[i] = {
    id: i,
    value: "value " + i,
  });
  array.push(o);
  arObj[i] = o;
}
