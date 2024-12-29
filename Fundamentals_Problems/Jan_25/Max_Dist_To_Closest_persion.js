var MaxDistanceToClosestPersion = function (seats) {
     let prev = -Infinity;
     let next = -Infinity;
     let ans = -1;
     for (let i = 0; i < seats.length; i++) {
          if (seats[i] == 1) {
               prev = i;
               next = i;
          } else {
               // console.log(i, prev, next);
               if (i > next) {
                    next = i;
                    while (next < seats.length && seats[next] == 0) {
                         next++;
                    }
                    if (next == seats.length) next = infinity;
               }
               ans = Math.max(ans, Math.min(i - prev, next - i));
          }
     }
     return ans;
};
// let seats = [1, 0, 0, 0, 1, 0, 1,];
let seats = [0, 1];
ans = MaxDistanceToClosestPersion(seats);
console.log(ans);
