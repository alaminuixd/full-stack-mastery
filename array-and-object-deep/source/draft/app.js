import { v4 as uuidv4 } from "uuid";

const students = [
  {
    id: "27d5e8ec-13fc-4c4e-a2de-2f50c0703f78",
    name: "Al Amin Khan",
    email: "alamin@gmail.com",
  },
  {
    id: "1b3758ea-05e9-4c5b-88d3-78d983282079",
    name: "Miraz Uddin",
    email: "miraz@gmail.com",
  },
  {
    id: "000cf1f6-c090-48cb-bd6d-2307f4bb22af",
    name: "Helal Sheakh",
    email: "helalsheakh.com",
  },
  {
    id: "972cbe91-dc66-4a88-bfd2-e3b07004dc56",
    name: "Osman Hadi",
    email: "osmanhadi@gmail.com",
  },
];

/* for (const v of students) {
  if (v.id === "27d5e8ec-13fc-4c4e-a2de-2f50c0703f78+") {
    console.log(v);
    break;
  }
  console.log("User not found!");
  break;
} */

const studentsObj = {
  "27d5e8ec-13fc-4c4e-a2de-2f50c0703f78": {
    id: "27d5e8ec-13fc-4c4e-a2de-2f50c0703f78",
    name: "Al Amin Khan",
    email: "alamin@gmail.com",
  },
  "1b3758ea-05e9-4c5b-88d3-78d983282079": {
    id: "1b3758ea-05e9-4c5b-88d3-78d983282079",
    name: "Miraz Uddin",
    email: "miraz@gmail.com",
  },
  "000cf1f6-c090-48cb-bd6d-2307f4bb22af": {
    id: "000cf1f6-c090-48cb-bd6d-2307f4bb22af",
    name: "Helal Sheakh",
    email: "helalsheakh.com",
  },
  "972cbe91-dc66-4a88-bfd2-e3b07004dc56": {
    id: "972cbe91-dc66-4a88-bfd2-e3b07004dc56",
    name: "Osman Hadi",
    email: "osmanhadi@gmail.com",
  },
};
console.log(uuidv4());
const std = {
  id: "9b57902b-bd52-41ab-b62d-993b95f7b302",
  name: "Javed Patoary",
  email: "javed@gmail.com",
};

studentsObj[std.id] = std;

// const idToUpdate = "1b3758ea-05e9-4c5b-88d3-78d983282079";
// const updateData = { name: "Miraz Uddin Hawladar" };
// studentsObj[idToUpdate] = {
//   ...studentsObj[idToUpdate],
//   ...updateData,
// };

// delete studentsObj[idToUpdate];

// console.log(studentsObj);

/* Object.keys(studentsObj).forEach((key) => {
  console.log(studentsObj[key]);
}); */

// const studentArr = Object.keys(studentsObj).map((key) => studentsObj[key]);
// console.log(studentArr);

/* Object.keys(studentsObj).forEach((student) => {
  const singleStudent = studentsObj[student];
  console.log(singleStudent.email);
}); */

// Object.values(studentsObj).forEach((student) => console.log(student.email));

const array = [];
const arObj = {};

/* for (let i = 0; i < 5000000; i++) {
  array.push({
    id: i,
    value: "person " + i,
  });
} */
for (let i = 0; i < 5000000; i++) {
  const o = (arObj[i] = {
    id: i,
    value: "value " + i,
  });
  array.push(o);
  arObj[i] = o;
}
// const id = 20;
// console.time("find");
// const itemToUpdate = array.find((item) => item.id === id);
// console.timeEnd("find");
// console.log(itemToUpdate);

/* console.time("obj");
Object.values(arObj).forEach((item) => {
  const id = 4000009;
  const found = item.id === id;
  if (item.id === id) {
    console.log(item);
  }
});
console.timeEnd("obj"); */

// console.log(Object.keys(arObj).length);
// console.log(arObj[0]);

const arID = 599999;
const deleteIndex = array.findIndex((item) => item.id === 4999851);
console.time("arr");
// array[arID].value = "Custom Value";
/* array.unshift({
  id: 5000001,
  value: "Unshift value",
}); */
array.splice(deleteIndex, 1);
console.log(deleteIndex);
console.timeEnd("arr");

const objID = 599998;
console.time("arr");
// arObj[objID].value = "Custom Value";
/* arObj[5000002] = {
  id: 5000002,
  value: "Object insersation",
}; */
delete arObj[objID];
console.timeEnd("arr");
