function decoTwo(value: string) {
  console.log('데코레이터 평가됨_2');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(value);
  };
}

class TestClassTwo {
  @decoTwo('안녕하세요.')
  test() {
    console.log('함수 호출됨');
  }
}

const tTwo = new TestClass();
t.test();
