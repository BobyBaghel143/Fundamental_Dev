let a = 7;
let b = 10;
let c = 6;   // 3
if (a + b > c && a + c > b && b + c > a) {
  console.log("Yes");
} else {
  console.log("No");
}


// Type of tringle
// if (a == b && b == c && c == a) {
//   console.log("Equilateral");
// } else if (a != b && b != c && c != a) {
//   console.log("Scaler");
// } else {
//   console.log("Isosceles");
// }

if (a == b && b == c && c == a) {
  console.log("Equilateral");
} else if (a == b || b == c || c == a) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}




// Perimeter of a triangle
if (a + b + c === 21) {
  console.log("Perimeter of tringale = ", 21)
}

// Semi perimeter of triangle
