var merge = function (Intervals, newInterval) {
  
  Intervals.sort(function comparator(a, b) {
    return a[0] - b[0];
  });
  let result = [];
  result.push(Intervals[0]);
  for (let i = 1; i < Intervals.length; i++) {
    let endOfLast = result[result.length - 1][1];
    let startCurr = [Intervals[i][0]];
    if (endOfLast >= startCurr) {
      result[result.length - 1][1] = Math.max(endOfLast, Intervals[i][1]);
    } else {
      result.push(Intervals[i]);
    }
  }
  return result;
};
let Intervals = [[1, 3], [6, 12], [9, 14], [15, 18]], newInterval = [2, 5];
result = merge(Intervals);
console.log(result);