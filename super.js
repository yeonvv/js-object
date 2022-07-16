class person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class personPlus extends person {
  constructor(name, first, second, third) {
    // super; 부모 함수는 그대로 두되, 자식 함수를 부모 함수 내부의 내용도 수정해서 사용할 때
    // super 키워드 하나만 사용되거나, this 키워드가 사용되기 전에 호출되어야 한다
    // super(); 부모 클래스 객체의 함수를 호출
    super(name, first, second);
    this.third = third;
  }
  sum() {
    // super.; . 뒤에 오는, 부모 클래스에 소속된 기능을 불러온다(부모 클래스 자체를 불러온다)
    return `super: ${super.sum() + this.third}`;
  }
  avg() {
    return `${(this.first + this.second + this.third) / 3}`;
  }
}

let kim = new personPlus("kim", 10, 20, 30);

console.group("object super");

console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

console.groupEnd("object super");
