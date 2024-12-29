// function declaration 
/*function f(){
    console.log("I am a function declaration.");
}
f();
*/

// Everything below is a functoin expression 

/*
const x=function fn(){
    console.log("I am a named function expression.")
};
x();
*/

/*
const z=function (){
    console.log("I am an anonymous function expression.");
}
z();
*/


// IIFE -> Immediately invoked function  expression
/*
(function f(){
    console.log("I am an IIFE.")  
})
();
*/

    // Arrow function
/*    
const y = (x, y) => {
    console.log("I am fat arrow function, ", x, y);
};
y(10, 20);
*/
/*
const a=(x) => x*x;
console.log(a(11));
*/

/*
arr=[5,4,3,2,1];
// arr.sort((a,b) => a-b);
arr.sort(function (a,b){
    return a-b;
});
console.log(arr);
*/