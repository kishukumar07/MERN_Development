'use strict';

// Bubble sort has worst-case and average complexity both О(n^2),
// where n is the number of items being sorted.
// The significant advantage that bubble sort has over most other implementations,
// even quicksort, but not insertion sort, is that the ability to detect that the
// list is sorted is efficiently built into the algorithm. When the list is
// already sorted (best-case), the complexity of bubble sort is only O(n).

function comparator(a, b) {
  return a - b;
}

/**
 * Bubble Sort with O(n^2) complexity
 * @param {Array} input array
 * @param {Function} fn (comparator)
 * @returns {Array} bubble sorted array
 */
module.exports = function (arr, fn) {
  fn = fn || comparator;
  var tmp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      if (fn(arr[j], arr[j - 1]) < 0) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  return arr;
};
