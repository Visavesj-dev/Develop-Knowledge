// Object Destructuring

const users = {
  firstname: "Tyson",
  lastname: "Fury",
  age: 30,
};
const { firstname, lastname, age } = users;

console.log(firstname); // Tyson
console.log(lastname); // Fury
console.log(age); // 30

// New Variable Names

const users = {
  firstname: "Tyson",
  lastname: "Fury",
  age: 30,
};
const { firstname: f, lastname: l, age: a } = users;
console.log(f); // Tyson
console.log(l); // Fury
console.log(a); // 30

// Default Values

// แบบที่ยังไม่ได้กำหนด default values
const users = {
  firstname: "Tyson",
  lastname: "Fury",
};
const { firstname, lastname, age } = users;
console.log(firstname); // Tyson
console.log(lastname); // Fury
console.log(age); // undefined *ไม่มี property age ใน object

//แบบที่กำหนด default values แล้ว
const users = {
  firstname: "Tyson",
  lastname: "Fury",
};
const { firstname, lastname, age = 30 } = users;
console.log(firstname); // Tyson
console.log(lastname); // Fury
console.log(age); // 30 * ถ้าไม่มี property age ใน object จะแสดงค่า default แทน

// Nested Object Values

const users = {
  firstname: "Tyson",
  lastname: "Fury",
  age: 30,
  score: {
    w: 29,
    k: 20,
    l: 0,
    d: 1,
  },
};
const {
  firstname,
  lastname,
  age,
  score: { w: win, k: ko, l: lose, d: drew },
} = users;
console.log(firstname); // Tyson
console.log(lastname); // Fury
console.log(age); // 30
console.log(win); // 29
console.log(ko); // 20
console.log(lose); // 0
console.log(drew); // 1

// Object Destructuring With Rest

const users = {
  firstname: "Tyson",
  lastname: "Fury",
  age: 30,
  score: {
    w: 29,
    k: 20,
    l: 0,
    d: 1,
  },
};
const { firstname, lastname, age, ...other } = users;
console.log(firstname); // Tyson
console.log(lastname); // Fury
console.log(age); // 30
console.log(other); // { score: { w: 29, k: 20, l: 0, d: 1 } }

// Array Destructuring

const users = ["Tyson", "Fury", 30];
const [firstname, lastname, age] = users;
console.log(firstname); // Tyson
console.log(lastname); // Fury
console.log(age); // 30

// Skipping Items in an Array

const users = [
  "Tyson",
  "Fury",
  30,
  {
    w: 29,
    k: 20,
    l: 0,
    d: 1,
  },
];
const [firstname, , age] = users;
console.log(firstname); // Tyson
console.log(age); // 30

// Array Destructuring With Rest

const users = [
  "Tyson",
  "Fury",
  30,
  {
    w: 29,
    k: 20,
    l: 0,
    d: 1,
  },
];
const [firstname, lastname, age, ...other] = users;
console.log(firstname); // Tyson
console.log(lastname); // Fury
console.log(age); // 30
console.log(other); //  [ { w: 29, k: 20, l: 0, d: 1 } ]

// Function Destructuring

const getBoxer = () => ["Tyson fury", "Deontay Wilder", "Luis Ortiz"];
const [tyson, deontay] = getBoxer();
console.log(tyson); // Tyson fury
console.log(deontay); // Deontay Wilder
