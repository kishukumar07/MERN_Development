// console.log("1");
// setTimeout(function () {
//     console.log("2");
// },0)
// console.log("3");

// 0 -> 4
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 2000);
}
