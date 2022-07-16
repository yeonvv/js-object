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
  // construtor가 class함수를 이용하여 만든 객체는 constructor함수만 자동으로 살행하기에 class내에 넣어줘도 constructor함수안에만 안 넣으면 person.prototype.sum과 같은 의미를 가진다
  // 여기서 알 수 있는 class를 사용하는 이유; 굳이 prototype method를 사용하지 않아도, 초기값을 가지는 constructor함수가 있어 class안에 넣어 코드를 쉽게 읽을 수 있다
  sum() {
    return `prototype: ${this.first + this.second}`;
  }
}

let kim = new person("kim", 10, 20);
kim.sum = function () {
  return `this: ${this.first + this.second}`;
};
let song = new person("song", 10, 10, 10);

console.group("object class");

console.log("kim.sum()", kim.sum());
console.log("song.sum()", song.sum());

console.groupEnd("object class");
