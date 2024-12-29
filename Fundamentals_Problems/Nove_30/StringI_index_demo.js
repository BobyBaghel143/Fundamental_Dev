let str = "microsoft"; //lenth -> 9
/*
m -> 0;
i -> 1;
c -> 2;
r -> 3;
o -> 4;
s -> 5;
o -> 6;
f -> 7;
t -> 8;  (lenth-1)
 */
// console.log(str[2]);   //print  c
// console.log(str[9]);   //print undefined

// start index -> 0
// last index -> lengt-1

// console.log(str.length);

for (let idx = 0; idx <= str.length - 1; idx++) {
  console.log(idx, str[idx]); // we can iterate on all characters of a string bya actual iterate chars
}
