function lowerTriangle(n) {
    for (let row = 1; row <= n; row++) {
        let str = "";

        let spaces = row;          // spaces -> 2*row-1   check it
        // let spaces = 2*row - 1;
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }

        let stars = 2 * (n - row) - 1;
        for (let col = 1; col <= stars; col++) {
            str += "* "
        }
        console.log(str);
    }
}
lowerTriangle(5);