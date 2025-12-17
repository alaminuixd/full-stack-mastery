const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Alice",
  "Fiona",
  "Bob",
  "Diana",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "Kevin",
  "Laura",
  "Michael",
  "Nina",
  "Oliver",
  "Paula",
  "Quentin",
  "Rachel",
  "Samuel",
  "Tina",
];

// convert into object
const nameGroup = names.reduce((acc, curr) => {
  console.log(curr);
  const firstLetter = curr[0].toUpperCase();
  if (firstLetter in acc) {
    acc[firstLetter].push(curr);
  } else {
    acc[firstLetter] = [curr];
  }
  return acc;
}, {});

console.log(nameGroup);

console.log(Object.keys(nameGroup));

Object.keys(nameGroup).forEach((key) => {
  // console.log(key);
  // console.log(Array.isArray(nameGroup[key]));
  nameGroup[key].forEach((name) => console.log(name));
  console.log(`----------------------------`);
});
