var merge = function (invervals) {
    // sorting based on start time 
    intervals.sort(function comparator(a, b) {
        return a[0] - b[0];  // sorts based on start value
    });
    
    let result = [];
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let endOfLast = result[result.length - 1][1];
        let startOfCurr = intervals[i][0];
        if (endOfLast >= startOfCurr) {
            result[result.length - 1][1] = Math.max(endOfLast, intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}
// let intervals = [[1, 3], [8, 10], [2, 6], [15, 18]];
// let intervals = [[1,4], [4,5], [2, 6],[5,13],[12,16], [15, 18]];
let intervals =  [[1,3],[2,6],[8,10],[15,18]];
result = merge(intervals);
console.log(result);
