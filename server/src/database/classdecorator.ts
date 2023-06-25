// 클래스 데코레이터 팩토리이다.
// 생성자 타입 (new (...args: any[]): {}, 즉 new 키워드와 함께 어떠한 형식의 인수들도 받을 수 있는 타입)을
// 상속받는 제네릭 타입 T를 가지는 생성지를
// 팩토리 메서드의 인수로 전달하고 있다.
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  //  클래스 데코레이터는 생성자를 리턴하는 함수여야 한다.
  return class extends constructor {
    // 클래스 데코레이터가 적용되는 클래스에 reportingURL이라는 새로운 속성을 추가했다.
    reportingURL = 'http://www.google.com';
  };
}

@reportableClassDecorator
class BugReport {
  type = 'report';
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport('Needs dark mode');
console.log(bug);
