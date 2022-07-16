// class; = constructor 객체를 만드는 공장
class person {
  // class 생성자에서는 method 를 정의할때 function을 기입하지 않는다
  // 객체가 생성될때, 객체의 초기상태를 지정하기 위한, 객체가 만들어지기 직전에 실행되도록 약속되어 있는 함수 = constructor
  // JS는 객체를 생성할 때 constructor함수를 자동으로 실행한다
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
}

let kim = new person("kim", 10, 20);
console.log("kim", kim);

// let park = new person("park", 10, 20, 30);
// park.sum = function () {
//   return `this: ${this.first + this.second + this.third}`;
// };
// let song = new person("song", 10, 10, 10);

// console.group("object prototype");

// console.log("park.sum()", park.sum());
// console.log("song.sum()", song.sum());

// console.groupEnd("object prototype");
