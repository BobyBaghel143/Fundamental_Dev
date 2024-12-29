function f(x){
    x=90;
}

let a=10;
console.log(a);
f(a);    // we are not transrerring original a, instead we transfer copy variable of a
console.log(a);


function g(s){
    s="Boby";
}
let s="Ajay";
console.log(s);

g(s);
console.log(s);