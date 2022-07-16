class person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return `prototype: ${this.first + this.second}`;
  }
}

// extends; 기존의 함수는 그대로 두고 새로운 기능이 있는 함수를 만들 때, 새로운 함수에 기존의 함수의 모든 기능도 포함하여 사용
// 코드의 중복이 사라지고 상속하는 함수를 수정하면 상속받는 함수의 기능도 자동으로 수정된다
class personPlus extends person {
  avg() {
    return `${(this.first + this.second) / 2}`;
  }
}

let kim = new personPlus("kim", 10, 20);

console.group("object inheritance");

console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

console.groupEnd("object inheritance");
