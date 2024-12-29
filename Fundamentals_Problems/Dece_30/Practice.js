    // Time Complexity  Practice
// function f(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 1; j < Math.log(n); j++) {
//             ans += 1;
//         }
//     }
//     console.log(ans);
// }
// f(8);




// function f(n, m) {
//     let a = 0;
//     for (let i = 1; i < n; i++) {
//         a += i;
//     }

//     let b = 0;
//     for (let i = 1; i < m; i++) {
//         b += i;
//     }
//     console.log(a + b);
// }
// f(10, 15);




// function f(n) {
//     let ans = 0;
//     for (let i = 1; i < n; i++) {
//         for (let j = n; j > i; j--) {
//             ans += 1;
//         }
//         console.log(ans);
//     }
//     //     console.log(ans);
// }
// f(10);
// // console.log(f(10));




// function f(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return false;
//         }
//         return true;
//     }
//     // console.log(n);
// }
// console.log(f(64));



// function printNaturalNumbers(N) {
//     if (N === 0) {
//         return;
//     }
//     printNaturalNumbers(N - 1);
//     console.log(N);
// }
// printNaturalNumbers(5);




// function getNaturalNumbersList(N) {
//     const list = [];
//     for (let i = 1; i <= N; i++) {
//         list.push(i);
//     }
//     // console.log(list);
//     return list;
// }
// console.log(getNaturalNumbersList(9));




// function SumList(list, N, index) {
//     if (index === N) {
//         return 0;
//     }
//     const sum = SumList(list, N, index + 1);
//     return sum + list[index];
// }
// // console.log(SumList([1, 2, 3, 4, 5], 3, 4));




// function SumList(list, N) {
//     let sum = 0;
//     for (let i = 0; i < N; i++) {
//         sum += list[i]
//     }
//     // console.log(sum)
//     return sum;
// }
// console.log(SumList(9, 1));



// function f(n) {
//     let count = 0;
//     for (let i = n; i > 0; i /= 2) {
//         for (let j = 0; j < i; j++) {
//             count += 1;
//         }
//     }
//     // console.log(count);
//     return count;
// }
// console.log(f(12));




// function fabinacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fabinacci(n - 1) + fabinacci(n - 2);
// }
// console.log(fabinacci(8)); 
