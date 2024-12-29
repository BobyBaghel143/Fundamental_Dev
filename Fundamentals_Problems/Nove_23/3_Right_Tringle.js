function pattern(n) {
    for (let row = 1; row <= n; row++) {   //we will write a loop which will repeat some task for every row
        //inside the loop of row, we will do the task for each row
        //task => <some spaces> <some stars>
        //n=7, row=3,    *** -> this will be printed for this row
        //so lets build the spaces first
        let str = " ";
        //loop using which we will concatenate(n-row) spaces
        let spaces = n - row;
        for (let j = 1; j <= spaces; j++) {
            str += "  ";      // (left , upper, right) side tringle
        }
        //after the above loop ends, we will having (n-row) spaces in str
        //ex:- n=7, row=3, str="  "
        //loop to concatente stars
        let stars = row;
        for (let col = 1; col <= stars; col++) {
            str += "* ";
        }
        //after the end of the above loop, we have both spaces and then
        //stars in the sting 
        console.log(str);   //print the string
    }
}
pattern(4);





// function tringle(n) {
//     for (let row = 1; row <= n; row++){
//         let str = ""

//         let space = n - row;
//         for (let j = 1; j <= space; j++){
//             str += "  "
//         }

//         for (let col = 1; col <= row; col++){
//             str += "* "
//         }
//         console.log(str)
//     }
// }

// tringle(4);







