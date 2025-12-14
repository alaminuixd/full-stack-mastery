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
