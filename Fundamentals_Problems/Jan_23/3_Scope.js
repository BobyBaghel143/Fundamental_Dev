// Scope define the visibility of a variable or a function 

// Any variable or a function can  have one of the following 3 scopes:

// Global    =>  [var] -> A variable which has a gloval scope is visivle everywhere
// Block     => [let, const]
// Function  => [var]


function f() {
    {
        let x = 10;
        var z = 9;
    }
    // console.log(x);
    console.log(z);
};
f();