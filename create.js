const superObj = { superVal: "super" };
// const subObj = { subVal: "sub" };
// subObj.__proto__ = superObj;

// superObj를 부모로 하는 새로운 객체를 만드는 표준화된 방법
// __proto__보다는 아래의 방법으로 proto link를 설정하는 것이 더 좋은 방법
const subObj = Object.create(superObj);
// html페이지로 -> inspect -> Sources -> Watch.subObj -> __proto__ -> superObj확인
// console창 -> subObj.__proto__ = superObj => true확인
// debugger;
subObj.subVal = "sub";
subObj.superVal = "sub";

console.group("object create");

console.log("subObj.subVal", subObj.subVal);
console.log("subObj.superVal", subObj.superVal);

console.log("superObj.superVal", superObj.superVal);
console.log(subObj);

console.groupEnd("object create");
