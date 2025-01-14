# Bubble Sort

[Bubble Sort](http://en.wikipedia.org/wiki/Bubble_sort) algorithm javascript implementation wth O(n^2) complexity.

> Bubble sort has worst-case and average complexity both О(n^2), where n is the number of items being sorted. The significant advantage that bubble sort has over most other implementations, even quicksort, but not insertion sort, is that the ability to detect that thel ist is sorted is efficiently built into the algorithm. When the list is already sorted (best-case), the complexity of bubble sort is only O(n).

## Install

```sh
$ npm install --save bubble-sort-js
```

## Usage

```js
const bubblesort = require('bubble-sort-js');

// Ascending order
bubblesort([3,1,4,1,5,9,2,6,5,4]);
// => [1,1,2,3,4,4,5,5,6,9]

bubblesort([9,2,8,6,1,3]);
// => [1,2,3,6,8,9]

bubblesort([5,2,4,6,1,3]);
// => [1,2,3,4,5,6]


// Descending order
function comparator(a, b) { return b - a; }

bubblesort([5,2,2,6,1,3], comparator);
// => [6,5,3,2,2,1]

bubblesort([0,0,0,0,0,-1], comparator);
// => [0,0,0,0,0,-1]


// Ascending sort arrays of objects
function orderImages(a, b) { return a.order - b.order };

const images = [
  {href: 'http://path/to/something/awesome', caption: 'Awesome', order: 4},
  {href: 'http://path/to/something/terrifik', caption: 'Terrifik', order: 1},
  {href: 'http://path/to/something/crazy', caption: 'Crazy', order: 3},
  {href: 'http://path/to/something/amazing', caption: 'Amazing', order: 2}
];

bubblesort(images, orderImages);
/*
=> [
    {href: 'http://path/to/something/terrifik', caption: 'Terrifik', order: 1},
    {href: 'http://path/to/something/amazing', caption: 'Amazing', order: 2},
    {href: 'http://path/to/something/crazy', caption: 'Crazy', order: 3},
    {href: 'http://path/to/something/awesome', caption: 'Awesome', order: 4}
  ]
*/
```
