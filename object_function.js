const kim = { name: "kim", first: 10, second: 20 };
const lee = { name: "lee", first: 10, second: 10 };
function sum1() {
  // sum.call(kim) // sum함수는 내부적으로 kim이 된다 // 즉 this == kim이 된다
  return this.first + this.second;
}

function sum2(prefix) {
  return prefix + (this.first + this.second);
}

// 모든 함수는 call이라는 method를 가지고 있다 // JS에서는 함수도 객체이기 때문
// sum.call() == sum()

console.group("object call");

console.log("sum1.call(kim)", sum1.call(kim));
console.log("sum1.call(lee)", sum1.call(lee));

// call이라는 함수의 첫번째 인자는; 그 함수 내부를 차지할, 즉 this가 될 인자를 받고
// 두번째 인자부터는; 호출하는 함수의 파라미터에 들어갈 인자 값을 넣는다
console.log("sum2.call(kim)", sum2.call(kim, " => "));

console.groupEnd("object call");
