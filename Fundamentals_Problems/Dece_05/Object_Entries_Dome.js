let x = {
  name: "John",
  company: "Microsoft",
  salary: 4000000,
  age: 24,
  city: "Bengaluru",
  team: "Azure storage",
  designation: "Software Engineer",
};

// loop over an object
for (const entry of Object.entries(x)) {
  // console.log(entry);
}

// there is one more way using for..in loop
// for in loop actually helps up loop over keys
for (const keys in x) {
  // console.log(keys, x[keys]);
  // console.log(keys)
  // console.log(x[keys])
}

for (const values in x) {
  console.log(values, ":", x[values]);
  // console.log(x[values])
}
