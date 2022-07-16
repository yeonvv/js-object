// 객체 만들기
// method; 함수가 객체에 속해서, 객체라는 것을 포함해서 함수를 표현할때 쓰는 용어
console.group("object create");
const MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.floor(3.2)", MyMath.floor(3.6));
console.groupEnd("object create");
