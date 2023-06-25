// function format(formatString: string) {
//   return function (target: any, propertyKey: string): any {
//     let value = target[propertyKey];

//     function getter() {
//       return `${formatString} ${value}`;
//       // getter에서 데코레이터 인수로 들어온 formatSring을
//       // 원래 속성과 조합한 string으로 바꾼다.
//     }
//     function setter(newVal: string) {
//       value = newVal;
//     }

//     return {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true,
//     };
//   };
// }

// class Greeting {
//   @format('hello')
//   // 데코레이터에 formatString을 전달한다.
//   greeting: string;
// }

// const propertyDecorator = new Greeting();
// propertyDecorator.greeting = 'world';
// console.log(propertyDecorator.greeting);
// // 속성을 읽을 때 getter가 호출되며 Hello World가 출력된다.
