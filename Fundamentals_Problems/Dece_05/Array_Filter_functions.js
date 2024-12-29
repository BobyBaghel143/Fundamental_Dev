/*
  Filter function
  Filter is also a higher order function
  Filter also loops over the array element
  there is one special thing about filter, i.e.the argument function f which we have to pass inside
  Filter should always return a boolean, otherwise output will be converted to a boolean

  Filter loops over every element, passes that element in the argument function and then if the output
  of the this function call is true, then it stores the original element in a new array otherwise
  doesn't
*/

function OddOrEven(x) {    // x = 1 -> 1&2 ==> 1 , 1==0   NO
  return (x % 2 == 0)     // returning a boolian
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
result = arr.filter(OddOrEven);
console.log(result);