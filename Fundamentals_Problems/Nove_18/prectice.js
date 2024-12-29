let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {       // Indexing always start -> 0, but lenth -> 1
//   console.log(`Printing the arr value  i = ${arr[i]}`)   // printing the actual value of this arr
//   for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
//   }
// }


// Matrix sum
// let mat1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let R1 = 2;
// let C1 = 3;

// let mat2 = [
//   [7, 8],
//   [9, 10],
//   [11, 12],
// ];
// let R2 = 3;
// let C2 = 2;

// for (let i = 0; i < R1; i++) {
//   for (let j = 0; j < C2; j++) {
//     let result = 0;
//     for (let k = 0; k < R2; k++) {
//       result += mat1[i][k] * mat2[k][j];
//     }
//     console.log(result + " ");
// }
// // console.log(result);
// }



// get Eratosthenes  / Get prime number
// let N = 10;
// // let arr = Array(N + 1).fill(true);
// // arr[0] = false;
// // arr[1] = false;
// for (let i = 2; i <= N / 2; i++) {
//   let multiple = 2;
// //   if (arr[i] === false) {
// //     continue;
// //   }
//   for (let k = i * multiple; i * multiple < N; multiple++) {
//     console.log(i + " " + k);
//     arr[i * multiple] = false;
//   }
// }
// console.log(arr);



console.log("start");
let i = 0;
while (i <= arr.length) {
  console.log(i);
  i++;   // i += 1;
}
console.log("end");

for (let i = 0; i < arr.length; i++) {   //  for loop
  console.log(arr[i]);
  // console.log(i);/
}
