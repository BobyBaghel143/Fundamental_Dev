/*
var merge = function (intervals) {
    intervals.sort(function comparator(a, b) {
        return a[0] - b[0];
    });
    let result = [];
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let endOfLast = result[result.length - 1][1];
        let startOfCurr = intervals[i][0];
        if (endOfLast >= startOfCurr) {
            result[result.length - 1][1] = Math.max(endOfLast,intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}
let intervals = [[1, 4], [4, 5], [2, 6], [5, 13], [12, 16], [15, 18]]
result = merge(intervals);
console.log(result);
*/



/*
var findOriginalArray = function (changed) {
    if (!changed.length % 2 != 0) return [];
    changed.sort(function (a, b) {
        return a - b;
    });

    let freq = {};
    for (let i = 0; i < changed.length; i++) {
        if (!freq[changed[i]]) {
            freq[changed[i]] = 1;
        } else {
            freq[changed[i]]++;
        }
    }

    let result = [];
    for (let i = 0; i < changed.length; i++) {
        let currElement = changed[i];
        if (freq[currElement]) {
            let doubleVal = 2 * currElement;
            if (freq[doubleVal]) {
                freq[currElement]--;
                freq[doubleVal]--;
                result.push(currElement);
                /*if (freq[currElement] == 0) {
                    delete freq[currElement];
                }
                if (freq[doubleVal] == 0) {
                    delete freq[doubleVal];
                }
            } else {
                return [];
            }
        }
    }
    return result;
}

let changed = [1, 3, 4, 2, 6, 8];
result = findOriginalArray(changed);
console.log(result);
*/


// var sort=function(arr){
//     arr.sort(function(arr){
//         return a[]-b[];
//     })
// }



   // sort array
let compare =(a,b)=>{
    return a-b;
};
let arr=[3,5,4,2,65,];
console.log(arr.sort(compare));