const superObj = { superVal: "super" };
const subObj = { subVal: "sub" };
// __proto__; class가 아닌 객체를 직접 다른 객체에 자식으로 만든다
// subObj의 원형이 무엇인가를 가리키는 prototype link
// 정석은 아니다
subObj.__proto__ = superObj;

console.group("object __proto__");
subObj.superVal = "sub";

console.log("subObj.subVal", subObj.subVal);
// subObj의 superVal를 찾아보고, 없으면 prtotype link의 superVal를 찾는다
console.log("subObj.superVal", subObj.superVal);

// subObj의 superVal값을 바꾼다고 해서 superObj의 superVal이 바뀌는 것은 아니다
// 객체를 바꾸는 거지 그 객체의 proto를 바꾸는 것이 아님
console.log("superObj.superVal", superObj.superVal);
console.log(subObj);

console.groupEnd("object __proto__");
