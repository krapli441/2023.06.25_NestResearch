// // 매개변수가 제대로 된 값으로 전달되었는지 검사하는 데코레이터.
// import { BadRequestException } from '@nestjs/common';

// // 매개변수의 최솟값을 검사하는 매개변수 데코레이터
// function MinLength(min: number) {
//   return function (target: any, propertyKey: string, parameterIndex: number) {
//     // target 클래스(여기선 User)의 validators 속성에 유효성을 검사하는 함수를 할당한다.
//     target.validators = {
//       minLength: function (args: string[]) {
//         // args 인수는 25번째 줄에서 넘겨받은 메서드의 인수다.
//         return args[parameterIndex].length >= min;
//         // 유효성 검사를 위한 로직이다.
//         // parameterIndex에 위치한 인수의 길이가 최솟값보다 같거나 큰지 검사한다.
//       },
//     };
//   };
// }

// // 함께 사용할 메서드 데코레이터
// function Validate(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor,
// ) {
//   const method = descriptor.value;
//   // 메서드 데코레이터가 선언된 메서드를 method 변수에 임시로 저장한다.
//   descriptor.value = function (...args) {
//     // 설명자의 value에 유효성 검사 로직이 추가된 함수를 할당한다.

//     // target(User 클래스)에 저장해둔 validators를 모두 수행한다.
//     // 이 때 원래 메서드에 전달된 인수들을 각 validator에 전달한다.
//     Object.keys(target.validators).forEach((key) => {
//       if (!target.validators[key](args)) {
//         // 인수를 validator에 전달하여 유효성 검사를 수행한다.
//         throw new BadRequestException();
//       }
//     });
//     method.apply(this, args); // 원래의 함수를 실행한다.
//   };
// }

// class User {
//   private name: string;

//   @Validate
//   setName(@MinLength(3) name: string) {
//     this.name = name;
//   }
// }

// const parameterDecorator = new User();
// parameterDecorator.setName('krpli441'); // 매개변수 name의 길이가 8이기 때문에 오류가 발생하지 않는다.
// console.log('--------------');
// parameterDecorator.setName('ki'); // 매개변수 name의 길이가 3보다 작기 때문에 BadRequestException이 발생한다.
