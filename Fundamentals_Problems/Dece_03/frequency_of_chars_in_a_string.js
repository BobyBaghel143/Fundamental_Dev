// let str = "Javascript";
// let freqMap = {}; // empty
// for (const char of str) {
//   if (freqMap[char]) {
//     freqMap[char] += 1; // if present update it
//   } else {
//     freqMap[char] = 1; // if not present add it    // add a  new key, value.
//   }
// }
// console.log(freqMap);





let arr = [1, 2, 2, 3, 1, 4, 7, 5, 6, 2, 3, 9, 7, 8, 2, 3, 2, 3];
let mp = {};
for (const value of arr) {
  if (mp[value]) {
    mp[value]++;   // updated
  } else {
    mp[value] = 1;  // add new key value
  }
}
console.log(mp);
