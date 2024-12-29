// let str = "Boby";
// str[4] = "G";
// // let newstr = str[4] = "G";
// console.log(str);  // strings are immutable, hence dont update.




let arr = [9, 2, 1, 5, 6];
arr.sort(function (a, b) {
    return a - b;
})
arr[5] = 121;
console.log(arr);   // arr are mutable, hence they get updated.