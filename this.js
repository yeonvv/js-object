// this; 자기 자신을 가리키는 표현
// 객체 내의 method에서 해당 객체의 property를 호출할 때 사용, 객체의 이름이 바뀌어도 원래의 로직을 유지할 수 있어 코드의 재사용에 도움이 된다

let kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
console.group("this");

console.log("kim.sum()", kim.sum());

console.groupEnd("this");
