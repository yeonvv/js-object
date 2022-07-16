const kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

const lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function () {
  return (this.first + this.second) / 2;
};
// const lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   avg: function () {
//     return (this.first + this.second) / 2;
//   },
// };
// lee.__proto__ = kim;

console.group("object useInheritance");

console.log("kim.sum() :", kim.sum());
console.log("lee.sum() :", lee.sum());

console.groupEnd("object useInheritance");
