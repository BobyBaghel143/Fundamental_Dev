const numbers = [1, 2, 3, 4, 5];
const fruits = ["banana", "apple", "orange", "grapes", "mango", "apple"];


// //   Push method
// numbers.push(6, 7);
// console.log(numbers);


// // Pop method
// const lastNumber = numbers.pop();
// console.log(numbers, lastNumber);


// // Shift method
// const firstNumber = numbers.shift();
// console.log(numbers, firstNumber);


// // Unshift method
// numbers.unshift(-1, 0);
// console.log(numbers);


//      // Find method
// // Return the value of the first element in the array that satisfies the provide testing function.
// // otherwise, undefined is returned.
// const foundNumber = numbers.find((num) => num > 3);
// console.log(foundNumber);


// // Some method
// // Tests whether at least on element in the array passes the test implemented by the provided function
// // it returns true,  if any element passes the test otherwise it return false.
// const hasEvenNumber = numbers.some((num) => num % 2 == 0);
// console.log(hasEvenNumber);


// // Every method
// // Tests whether all elements in the arary pass the test implementd by the provided function .
// // all element passed  the test   so true   otherwise false.
// const allEvenNumbers = numbers.every((num) => num % 2 == 0);
// console.log(allEvenNumbers);


// //    Sort method
// fruits.sort();
// console.log(fruits);
// numbers.sort((a, b) => a - b);
// console.log(numbers);


//   // Includes method
// const includesThree = numbers.includes(3);
// console.log(includesThree);


// // // Slice method
// // Returns a shallow copy of a portion of an array into a new array object selected from
// // start to end but (end not included)
// const sliceNumber = numbers.slice(0, 2);
// console.log(sliceNumber);


// splice method
// const spliceNumber = numbers.splice(2, 1, 101)
// console.log(spliceNumber);
// console.log(numbers);


// // Map method
// // create a new array with the result of calling an provided function on every element in the calling arr.
// const doubleNumbers = numbers.map((num) => num * 2);
// console.log(doubleNumbers);


// // Filter method
// const evenNumbers = numbers.filter((num) => num % 2 == 0);
// console.log(evenNumbers)


// // Reduce method
// const sum = numbers.reduce((total, num) => total + num);
// console.log(sum);


// // forEach method
// numbers.forEach((num) => console.log(num * 2));


// // indexOf method
// const orangeIndex = fruits.indexOf("orange");
// console.log(orangeIndex);


// // lastIndexOf method
// const lastAppleIndex = fruits.lastIndexOf("apple");
// console.log(lastAppleIndex);


// // Reverse method
// numbers.reverse();
// console.log(numbers);


// // Concat method
// const moreNumbers = [6, 7, 8];
// const allNumbers = numbers.concat(moreNumbers);
// console.log(allNumbers);


// // join method
// const joinedFruits = fruits.join(" , ");
// console.log(joinedFruits);


// toString method
// const numbersString = numbers.toString();
// console.log(numbersString);


// console.log(numbers)
// console.log(fruits)












 //  Destructuring Assignment
// const person = { name: "Alice", age: 25 };
// const { name, age } = person;
// console.log("Name :", name, "Age :", age)

//   // Spread Operator
// const numbers = [1, 2, 3, 4];
// const newNumbers = [...numbers, 5, 6];
// console.log('numbers : ', newNumbers);

// // Rest Parameter
// const sum = (...numbers) => {
//     return numbers.reduce((acc, num) => {
//         return acc + num;
//     }, 0);
// }
// console.log(sum(1, 2, 3));

// // Async / Await
// const API = "https://api.example.com";
// const fetchData = async () => {
//   try {
//     const result = await fetch(`${API}/data`);
//     const data = await result.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Map & Set
// const numberMap = new Map().set("one", 1);
// const unique = new Set([1, 2, 3, 2, 1]);
// unique.forEach((number) => console.log(number));
