function f(){
    var x=9;       // var gives a function scope,
    console.log(x);
    if(true){
        var y=10;
        let z=11;   // let gives a block scope
        console.log(y);
        console.log(z);
    }
};
f();