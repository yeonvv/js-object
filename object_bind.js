const kim = { name: "kim", first: 10, second: 20 };
const lee = { name: "lee", first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}

// bind; sum이라는 함수의 내부적으로 this를 영구히 kim으로 하는 새로운 함수를 만들어 낸다
// 기존의 sum함수에는 영향을 주지 않는다
// call과 같이 두번째 인자부터는 파라미터 값을 대신할 인자를 받는다
const kimSum = sum.bind(kim, "-> ");

console.group("object bind");

console.log("sum.call(kim)", sum.call(kim, "=> "));
console.log("sum.call(lee)", sum.call(lee, ": "));

console.log("kimSum()", kimSum());

console.groupEnd("object bind");
