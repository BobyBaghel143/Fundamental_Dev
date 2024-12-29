let x = { name: "Boby", age: 23 };
let y = { name: "Ajay", age: 24, marks: 100 };
// access any value using the key
// NOTE:from key u can access values but not vice-a-versa
// console.log(x["name"]);
// console.log(y.name);


// Are object mutable ?
// yes
y.name = "Tanmay";  // update object
console.log(y);

//how to add a new property to an already created object 
x.marks = 101;   // if marks key is present it will update it, otherwise, it adds it
x["company"] = "Google";
console.log(x);


// delete a key value pair ?
// we can use delete operator along with object.key
delete y.name;
console.log(y);