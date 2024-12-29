let x = {
  name: "John",
  company: "Microsoft",
  salary: 4000000,
  age: 24,
  city: "Bengaluru",
  team: "Azure storage",
  designation: "Software Engineer",
};

let keysOfX = Object.keys(x); // it will return an array of the key of x.
// console.log(keysOfX);

let valuesOfX = Object.values(x); // it will return an array of the values of x.
// console.log(valuesOfX);

let entriesOfX = Object.entries(x); // it will return an array of arrays of keys values of x.
console.log(entriesOfX);
