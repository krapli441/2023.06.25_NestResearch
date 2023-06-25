function first() {
  console.log('fisrt() : 팩토리 평가됨');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('first() : 호출됨');
  };
}

function second() {
  console.log('second() : 팩토리 평과됨');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('second() : 호출됨');
  };
}
