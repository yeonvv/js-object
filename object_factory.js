// let kim = {
//   name: "kim",
//   first: 10,
//   second: 20,
//   third: 30,
//   sum: function () {
//     return this.first + this.second + this.third;
//   },
// };

// let lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   third: 10,
//   sum: function () {
//     return this.first + this.second + this.third;
//   },
// };

// 위의 코드처럼 일일이 객체를 만들 필요 없이
// constructor(생성자) 객체를 만들고 new를 붙여 사용하면 그객체를 모티브로 한 새로운 객체가 만들어진다
// constructor가 되는 객체를 만들고 수정하면 해당 객체를 이용하여 만들어진 모든 객체가 한번에 바뀐다
function person(name, fir, sec, thi) {
  this.name = name;
  this.first = fir;
  this.second = sec;
  this.third = thi;
  this.sum = function () {
    return `${name}: ${this.first + this.second + this.third}`;
  };
}

let heo = new person("heo", 10, 20, 30);
let lee = new person("lee", 10, 10, 10);
console.group("object constructor");
console.log("heo", heo);
console.log("heo.sum()", heo.sum());
console.log("lee", lee);
console.log("lee.sum()", lee.sum());
console.groupEnd("object constructor");
