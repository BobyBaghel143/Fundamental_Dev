function pattern(n) {  //logic for printing the pattern
    for (let row = 1; row <= n; row++) {
        let str = " ";            //the task is o concatenate "*"     times
        
        let stars = n - row + 1;
        for (let col = 1; col <= stars; col++) {    //only change is the limit of loop
            str += "* ";
        }
        console.log(str);
    }
}
pattern(5);