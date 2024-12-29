var MaxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let ans = 0;
    while (start < end) {
        let width = end - start;
        ans = Math.max(ans, width * Math.min(height[start], height[end]));
        if (height[start] <= height[end]) {
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