// 배열 반복문
// console.groupEnd() 가 호출될 때 까지 모든 다음 출력을 들여쓰기로 받는다
const memberArray = ["Katarina", "Timo", "Varus"];
let i = 0;
console.group("array loop");
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("array loop");

// 객체 반복문
const memberObject = {
  top: "Timo",
  mid: "Katarina",
  adRange: "varus",
};
// 원소의 이름이 주입 될 변수 in 객체
console.group("object loop");
for (const position in memberObject) {
  // 객체가 가지고 있는 원소의 값만큼 중괄호가 실행된다
  // arg1 = key, arg2 = value가 된다
  console.log(position, memberObject[position]);
}
console.groupEnd("object loop");

// 배열에서 반복문을 사용하는 것은 필수이지만, 객체에서 반복문은 크게 중요하지 않다
