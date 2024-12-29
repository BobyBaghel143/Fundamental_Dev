/*
var MaxDistanceToClosestPerson = function (seats) {
    let prev = -Infinity;
    let next = -Infinity
    let ans = -1;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == 1) {
            prev = i;
            next = i
        } else {
            if (i > next) {
                next = i;
                while (next < seats.length && seats[next] == 0) {
                    next++;
                }
                if (next == seats.length) next = Infinity;
            }
            ans = Math.max(ans, Math.min(i - prev, next - i));
        }
    }
    return ans;
};

let seats=[0,1];
ans=MaxDistanceToClosestPerson(seats);
console.log(ans);
*/



/*
var MaxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let ans = 0;
    while (start < end) {
        let width = end - start;
        ans = Math.max(ans, width * Math.min(height[start], height[end]));
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return ans;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
ans = MaxArea(height);
console.log(ans);
*/