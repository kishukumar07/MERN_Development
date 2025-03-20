// Calling sort() on non-array objects
const arrayLike = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
  };
  console.log(Array.prototype.sort.call(arrayLike));
  // { '0': 4, '1': 5, length: 3, unrelated: 'foo' }
  