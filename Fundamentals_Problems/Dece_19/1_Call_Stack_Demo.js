function fun() {
    let x = 10;
    console.log("Inside fun", x);
}
// fun();

function gun() {
    let x = 20;
    console.log("Inside gun", x);
    fun();
    console.log("completed fun");
}

function run() {
    let x = 30;
    console.log('inside gun', x)
    gun();
    console.log("exit");
}
run();