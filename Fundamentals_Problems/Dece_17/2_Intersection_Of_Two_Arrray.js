var intersection = function (nums1, nums2) {
    let freqNums1 = {};
    for (let i = 0; i < nums1.length; i++) {
        let element = nums1[i];
        if (freqNums1[element]) {
            freqNums1[element]++;
        } else {
            freqNums1[element] = 1;
        }
    }

    let freqNums2 = {};
    for (let i = 0; i < nums2.length; i++) {
        let element = nums2[i];
        if (freqNums1[element]) {       // only wo element store honge jo freqnums1 m present ho.
            freqNums2[element] = 1;
        }
    }

    return Object.keys(freqNums2);
};

let nums1 = [2, 9, 1, 2, 2, 3, 9];
let nums2 = [2, 1, 1, 7, 6, 8, 3];


// let nums1 = [1, 2, 3, 4, 5];
// let nums2 = [3, 4, 5, 6, 7];

// console.log(Object.keys);
console.log(intersection(nums1, nums2))