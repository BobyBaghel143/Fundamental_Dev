function f(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

let a = 10, b = 20;
x = f(a, b);
console.log(x);