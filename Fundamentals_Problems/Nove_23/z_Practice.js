// function pattern(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = "";

//     let space = n - row;
//     for (let j = 1; j <= space; j++) {
//       str += "  ";
//     }

//     // let star = row;
//     let star = 2 * row - 1;
//     for (let col = 1; col <= star; col++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }

// pattern(4);

// function Triangles(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = "";

//     // let space = n - row;
//     let space = row;
//     for (let j = 1; j <= space; j++) {
//       str += "";
//     }

//     // let star = n;    // squre
//     // let star = row;     // left tringle upper
//     // let star = row-1;     // left tringle upper
//     // let star = 2 * row-1;     // left tringle upper
//     // let star = 2 * (n - row) - 1; // left tringle down
//     // let star = (n - row); // left tringle down
//     let star = (2 * (n - row)) / 2; // left tringle down
//     for (let col = 1; col <= star; col++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// Triangles(4);

// // Create diamond
// function upperTriangle(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = "";

//     let space = n - row;
//     for (let j = 1; j <= space; j++) {
//       str += "  ";
//     }

//     // let star = row;
//     let star = 2 * row - 1;
//     for (let col = 1; col <= star; col++) {
//       str += "* ";
//     }

//     console.log(str);
//   }
// }

// function lowerTriangle(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = "";

//     let space = row;
//     for (let j = 1; j <= space; j++) {
//       str += "  ";
//     }

//     // let star = (n - row);
//     let star = 2 * (n - row) - 1;
//     for (let col = 1; col <= star; col++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }

// function pattern(n) {
//   upperTriangle(n);
//   lowerTriangle(n);
// }
// pattern(4);

// //  create ButterFly
// function upper(n) {
//   for (let row = 1; row <= (n - 1) / 2; row++) {
//     let str = "";

//     let left = row;
//     for (let i = 1; i <= left; i++) {
//       str += "* ";
//     }

//     let space = n - 2 * row;
//     for (let j = 1; j <= space; j++) {
//       str += "  ";
//     }

//     let right = row;
//     for (let k = 1; k <= right; k++) {
//       str += "* ";
//     }

//     console.log(str);
//   }
// }

// function middle(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// function lower(n) {
//   for (let row = 1; row <= (n - 1) / 2; row++) {
//     let str = "";

//     let left = (n - 1) / 2 - row + 1;
//     for (let i = 1; i <= left; i++) {
//       str += "* ";
//     }

//     let space = 2 * row - 1;
//     for (let j = 1; j <= space; j++) {
//       str += "  ";
//     }

//     let right = (n - 1) / 2 - row + 1;
//     for (let k = 1; k <= right; k++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }

// function ButterFly(n) {
//     upper(n);
//     middle(n);
//     lower(n);
// }
// ButterFly(5);

// function factorial(n) {
//     let x = 1
//     for (let i = 1; i <= n; i++){
//         x *= i;
//     }
//     console.log(x)
// }
// factorial(5)


// function palindrome(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = "";

//     let space = n - row;
//     for (let i = 1; i <= space; i++) {
//       str += " ";
//     }

//     let counter = 1;
//     for (let j = 1; j <= row; j++) {
//       str += counter;
//       counter++;
//     }

//     let counter2 = row - 1;
//     for (let k = 1; k <= row -1; k++) {
//       str += counter2;
//       counter2--;
//     }

//     console.log(str);
//   }
// }
// palindrome(5);


function pali(n) {
  for (let row = 1; row <= n; row++){
    let str = ""

    
    let count = n;
    for (let i = count; i >= 1; i--){
      str += count;
      count--;
    }
    
    let space = n - row;
    for (let j = 1; j <= space; j++){
      str += "v "
    }

    console.log(str)
  }

}
pali(5);