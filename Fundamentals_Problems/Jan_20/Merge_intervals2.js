var merge = function (intervals) {
    // sorting based at start time
    intervals.sort(function comparator(a, b) {
        return a[1] -b[1];             // this changed    0 -> 1   
    });
    let result = [];
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let endOfLast = result[result.length - 1][1];
        let startOfCurr = intervals[i][0];
        if (endOfLast >= startOfCurr) {
            result[result.length - 1][1] = intervals[i][1];
            // result[result.length-1][1]=Math.max(endOfLast,intervals[i][1]);
            // result[result.length-1][0]=Math.min(result[result.length-1][0], intervals[i][0]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};
let intervals = [[1, 4], [4, 5], [2, 6], [5, 13], [12, 16], [15, 18]];
result = merge(intervals);
console.log(result);