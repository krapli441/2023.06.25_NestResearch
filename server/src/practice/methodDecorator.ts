interface PropertyDescriptor {
  configurable?: boolean; // 속성의 정의를 수정할 수 있는지 여부
  enumerable?: boolean; // 열거형인지 여부
  value?: any; // 속성 값
  writable?: boolean; // 수정 가능 여부
  get?(): any; // getter
  set?(v: any): void; // setter
}

function HandleError() {
  // 메서드 데코레이터가 가져야 하는 3개의 인수다.
  // 이 중 PropertyDescriptor는 객체 속성의 특성을 작성하는 객체로서
  // enumerable 외에도 여러 가지 속성을 가지고 있다.
  // enumerable 속성이 true가 되면 이 속성은 열거형이라는 뜻이 된다.
  return function (
    target: any,

    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(target);
    // 출력 결과는 {}이다.
    console.log(propertyKey);
    // 함수 이름 hello가 출력된다.

    console.log(descriptor);
    // hello 함수가 가지고 있던 설명자가 출력된다.
    // {
    // value: [Function: hello],
    // writable: true,
    // enumerable: false,
    // configurable: true
    // }

    const method = descriptor.value;
    // 설명자의 value 속성으로 원래 정의된 메서드를 저장한다.

    descriptor.value = function () {
      try {
        method();
        // 메서드를 호출한다.
      } catch (e) {
        // 에러 핸들링 로직 구현
        console.log(e);
        // Error : 테스트 에러가 출력된다.
      }
    };
  };
}

class Greeter {
  @HandleError()
  hello() {
    throw new Error('테스트 에러');
  }
}

const methodDecorator = new Greeter();
methodDecorator.hello();
