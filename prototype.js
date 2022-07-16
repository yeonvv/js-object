function person(name, fir, sec, thi) {
  // 데이터가 담기는 변수들은 생성자 안에 넣는 것이 일반적 물론 prorotype 사용 가능
  this.name = name;
  this.first = fir;
  this.second = sec;
  this.third = thi;
  // 생성자 안에서 만든 method의 단점
  // person이라는 생성자로 만들어진 객체가 생성될때마다 sum함수가 실행되고 있다
  // 컴퓨터의 메모리 낭비
  //   this.sum = function () {
  //     return this.first + this.second + this.third;
  // };
}
// 함수는 특별한 이유가 있지 않으면 생성자 함수의 prototype.함수 가, construtor를 만드는 일반적인 패턴이다
// 생성자로 인해 만들어진 객체들이 공통적으로 사용할 수 있는 method를 만든다
// 생성자 밖에 있기 때문에 객체가 만들어질때 마다 생성 되는 것이 아님, 한번만 만들어진다
// 성능 절약, 메모리 절약
// 하나의 함수를 개체들이 share한다
person.prototype.sum = function () {
  return `prototype: ${this.first + this.second + this.third}`;
};

let park = new person("park", 10, 20, 30);
let song = new person("song", 10, 10, 10);
console.group("object prototype");
// 각 개체별 함수의 return 값을 다르게 하기 위해 함수를 새롭게 변경하면 해당 객체만 변경이 되고 나머지 객체는 기존의 return 값을 따른다
park.sum = function () {
  return `this: ${this.first + this.second + this.third}`;
};
console.log("park", park);
// 이를 통한 JS의 특징; JS는 위에서 아래로 코드를 읽지만 객체 자신이 해당 method를 가지고 있는지 먼저 찾는다
// 그래서 위의 공통 함수보다 객체 내부 method를 찾아 실행하고 끝낸다
console.log("park.sum()", park.sum());
console.log("song", song);
// song 객체는, 객체 내부 sum method가 없어 객체 생성자인 person의 prototype의 method에 sum이라는 것이 정의되어 있는지를 찾아 실행
console.log("song.sum()", song.sum());
console.groupEnd("object prototype");
