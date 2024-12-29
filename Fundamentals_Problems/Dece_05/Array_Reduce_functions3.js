/* reduce is a higher order function availale for arrays 
   reduce also take a function f as an argument,
   what reduce does is, it one by one goes to every element ot the array, 
   say the current element is arr[i]
   reduce will pass this element to the function f, and accumulate the result of further function calls
   with this particulate result.
 */

function sum(prevResult, currValue) {
  // console.log(prevResult, currValue);
  return prevResult + currValue;
}
const arr = [1, 2, 3, 4, 5, 6];
const result = arr.reduce(sum);
console.log(result);

/*
first element  -> 2
second element -> 3
third element  -> 4
fourth element -> 5
fifth element  -> 6
*/

/*
Cart -> {iphone: 1000000, name: "Iphone"},
case -> {price: 500, name: "backcover"},
tempered glass -> {price: 300, name: tempered glash}
 */