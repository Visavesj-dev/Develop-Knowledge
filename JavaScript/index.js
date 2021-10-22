let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 219 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    // console.log("obj", obj);
    // let key = obj[property];
    // console.log("key", key);
    // // if (!acc[key]) {
    // //   acc[key] = [];
    // // }
    // console.log("acc", acc);
    // acc[key].push(obj);
    // return acc;
    // return { ...acc, ...obj[property] };
  }, {});
}

let groupedPeople = groupBy(people, "age");

console.log(groupedPeople);

let friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(
  function (previousValue, currentValue) {
    return [...previousValue, ...currentValue.books];
  },
  ["Alphabet"]
);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

const mapTransducer = (mapper) => (reducingFunction) => {
  return (result, input) => reducingFunction(result, mapper(input));
};

const filterTransducer = (predicate) => (reducingFunction) => {
  return (result, input) =>
    predicate(input) ? reducingFunction(result, input) : result;
};

const concatReducer = (result, input) => result.concat(input);

const lowerThan6 = filterTransducer((value) => {
  console.log(`#lowerThan6 called with: ${value}`);

  return value < 6;
});

const double = mapTransducer((value) => {
  console.log(`#double called with: ${value}`);

  return value * 2;
});

const numbers = [1, 2, 3];
const xform = R.compose(double, lowerThan6);

const output = numbers.reduce(xform(concatReducer), []);

console.log(output);
