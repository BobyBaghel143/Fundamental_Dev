var merge = function (nums1, m, nums2, n) {
  let result = Array(m + n).fill(0);
  let i = 0; // iterate on nums 1
  let j = 0; // iterate on nums 2
  let k = 0; // iterate on result

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result[k] = nums1[i];
      i++;
      k++;
    } else {
      result[k] = nums2[j];
      j++;
      k++;
    }
  }
  // The above while loop will end when any one array exhuasts
  while (i < m) {
    // nums1 still got same elements left
    result[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    // nums2 still got some elements left
    result[k] = nums2[j];
    j++;
    k++;
  }
  // because the question demads
  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
  // console.log(merge(m+n));
  return result;
};

let nums1 = [1, 2, 3, 7, 8,9], m = 6;
let nums2 = [4, 5, 6], n = 3;
result = merge(nums1, m, nums2, n);
console.log(result);
