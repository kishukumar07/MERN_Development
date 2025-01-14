const bubblesort = require('./index');

const a = [3,1,4,1,5,9,2,6,5,4];
bubblesort(a);
console.log(a);

bubblesort(a, function(a,b) { return b - a; });
console.log(a);

const images = [
  {href: 'http://path/to/something/awesome', caption: 'Awesome', order: 4},
  {href: 'http://path/to/something/terrifik', caption: 'Terrifik', order: 1},
  {href: 'http://path/to/something/crazy', caption: 'Crazy', order: 3},
  {href: 'http://path/to/something/amazing', caption: 'Amazing', order: 2}
];

function orderImages(a, b) { return a.order - b.order };

bubblesort(images, orderImages);

console.log(images);
