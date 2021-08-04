# 클래스

## 클래스 특징

- 클래스는 함수다

  = 클래스는 일급객체다

  = 클래스는 값처럼 사용 가능하다.

  ⇒ 클래스도 함수 객체 고유의 프로퍼티를 가지고 있다.

- 객체 생성 매커니즘이다.

## 생성자 함수와 차이점

생성자 함수와 유사하지만, 차이가 있다.

- 유사점
  - 객체를 생성한다.
  - 프로토타입 기반의 객체 지향 구현
- 차이점

  1. new 연산자

     ⎡ 클래스 : new 연산자 없이 호출 → **에러**

     ⎣ 생성자함수 : new 연산자 없이 호출 → **일반 함수로서 호출됨**

  2. `extends` , `super` 키워드

     ⎡ 클래스는 `extends` , `super` 키워드를 제공한다 → 상속 관계 구현을 더욱 간결하고 명료하게 한다.

     ⎣ 생성자 함수는 `extends` , `super` 키워드를 지원하지 않는다.

  3. 호이스팅

     ⎡ 클래스 : let, const 키워드로 선언한 변수처럼 호이스팅된다.

     ⎣ 생성자 함수 : 함수 선언문으로 정의된 생성자 함수 → 함수 호이스팅 / 함수 표현식으로 정의된 생성자 함수 → 변수 호이스팅

  4. strict mode

     ⎡ 클래스 내의 모든 코드에는 암묵적으로 strict mode가 지정되어 실행, 해제할 수 없다.

     ⎣ 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다

  5. 열거

     ⎡ 클래스의 메서드는 열거되지 않는다. ⇒ constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트 `[[Enumerable]]` 의 값이 false이다.

     ⎣ 생성자 함수의 메서드는 열거될 수 있다.

     - 생성자 함수의 열거되는 메서드 예시

       ```jsx
       // 생성자 함수
       function Circle(radius) {
         this.radius = radius;
         this.getDiameter = function () {
           return 2 * this.radius;
         };
       }

       // 인스턴스
       const circle1 = new Circle(5);

       // 프로퍼티 디스크립터 객체를 반환함
       console.log(Object.getOwnPropertyDescriptors(circle1));
       /*
       {
         radius: { value: 5, writable: true, enumerable: true, configurable: true },
         getDiameter: {
           value: [Function (anonymous)],
           writable: true,
           enumerable: true,
           configurable: true
         }
       }
       */
       ```

  6. 클래스가 생성자 함수보다 견고하고 명료하다

## 클래스 호이스팅

클래스는 정의 이전에 참조할 수 없다.

### 클래스 선언문

선언 단계와 초기화 단계가 분리되어 진행된다. (`let` , `const` 키워드로 선언한 변수처럼 호이스팅된다.)

1. 선언 단계 : 런타임 이전에 소스코드 평가과정에 먼저 평가 → 함수 객체 생성

   - 생성된 함수 객체 = 생성자 함수로서 호출할 수 있는 함수

     ⇒ 함수 객체가 생성됨과 동시에 프로토타입도 생성된다.

2. 초기화 단계 : 클래스 선언문에 도달했을 때 실행된다.

   클래스 선언문 직전까지는 클래스를 참조할 수 없으므로, 참조 에러가 발생한다.

### 클래스 표현식?

## 클래스 정의

- class 키워드 + 클래스 이름 + 중괄호
- 클래스 이름
  - 클래스 몸체 내부에서만 유효한 식별자
  - 외부 코드에서 접근 불가능

### 클래스 선언문 / 클래스 표현식

1. 클래스 선언문

   ```jsx
   class App {
     // ...
   }
   ```

2. 클래스 표현식

   클래스가 일급 객체이므로, 값처럼 사용할 수 있어서 변수에 할당할 수 있다.

   일반적이진 않다.

   ① 익명 클래스 표현식

   ```jsx
   const App = class {};
   ```

   ② 기명 클래스 표현식

   ```jsx
   const Foo = class Bar {};
   ```

### 클래스 몸체 정의

클래스 몸체에는 (0개 이상의) 메서드만 정의 가능하다.

- constructor
- 프로토타입 메서드
- 정적 메서드

## 인스턴스 생성

new 연산자와 함께 호출 → 인스턴스 생성

클래스는 인스턴스를 생성하는 것이 유일한 존재 이유이다. ⇒ 반드시 new 연산자와 함께 호출해야 한다.

### 클래스 선언문으로 정의한 클래스의 인스턴스 생성

```jsx
class App {}

const inst = new App();
```

### 클래스 표현식으로 정의한 클래스의 인스턴스 생성

클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.

클래스 이름으로 인스턴스를 생성하면 참조 에러가 발생한다.

→ 이유? 클래스 이름은 클래스 몸체 내부에서만 유효한 식별자, 외부 코드에서 접근 불가능하다.

```jsx
const Foo = class Bar {};

const inst1 = new Foo();
console.log(inst1); // Bar {}

const inst2 = new Bar();
console.log(inst2); // ReferenceError: Bar is not defined
```

## 클래스 메서드

- 클래스 몸체에는 0개 이상의 메서드만 선언할 수 있다.

  클래스 몸체에 프로퍼티를 직접 정의할 수 있는 새로운 표준 사양이 제안되어 있다.

  → 현재 크롬과 같은 모던 브라우저에서는 이미 사용 가능

- 인스턴스 프로퍼티는 반드시 constructor 내부에서 정의해야 한다.

### 1. constructor

- 목적 : 인스턴스를 생성하고 초기화하기 위한 메서드
- constructor라는 이름은 변경할 수 없다.

- constructor 내부의 this = 인스턴스 (생성자 함수와 공통점)

  - 클래스와 생성자 함수의 this

    ```jsx
    class Foo {
      constructor() {
        console.log(this); // Foo {}
      }
    }

    const foo = new Foo();
    ```

    ```jsx
    function Bar() {
      console.log(this); // Bar {}
    }

    const bar = new Bar();
    ```

- constructor 내부에서 this에 추가하는 프로퍼티 ⇒ 인스턴스 프로퍼티로 추가된다.

- constructor는 메서드로 해석되는 것이 아니다.

  constructor는 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다.

  - 프로토타입의 constructor 프로퍼티와는 다르다!!

    프로토타입의 constructor 프로퍼티는 생성자 함수를 가리킨다.

    클래스의 constructor와는 직접적인 관련이 없다.

    ```jsx
    class App {
      constructor(name) {
        this.name = name;
      }
    }

    const foo = new App();
    console.log(foo);
    ```

    ![image](https://user-images.githubusercontent.com/72931773/128028978-b7cde20c-c61f-4b53-a6d5-dc5979eb69c7.png)

- constructor는 생성자 함수와 유사하지만 몇가지 차이가 있다. ?

  - constructor는 클래스 내에 최대 한개만 존재할 수 있다.

    - 2개 이상의 constructor를 포함하면 SyntaxError

  - constructor는 생략할 수 있다.

    - 생략하면 클래스에 빈 constructor가 암묵적으로 정의된다.
    - 빈 constructor에 의해 빈 객체를 생성한다.
    - 인스턴스를 초기화하려면 constructor를 생략하면 안된다.

  - 프로퍼티가 추가되어 초기화된 인스턴스 생성하는 방법

    - constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.

      - 예제

        ```jsx
        class Person {
          constructor() {
            this.name = 'Choi';
          }
        }

        const me = new Person();
        console.log(me); // Person { name: 'Choi' }
        ```

  - constructor내에서는 인스턴스 생성과 동시에 인스턴스 프로퍼티 추가를 통해 인스턴스의 초기화를 실행한다.

    - 인스턴스를 초기화하려면 constructor를 생략하면 안 된다.
    - 인스턴스 생성할 때, 클래스 외부에서 인스턴스 프로퍼티의 초기값 전달하는 방법
      - constructor에 매개변수 선언 → 인스턴스 생성할 때 초기값 전달 ⇒ 초기값이 constructor의 매개변수에 전달된다.

  - constructor는 별도의 반환문을 갖지 않아야 한다.

    - 반환문이 없으면 : 암묵적으로 this(인스턴스)를 반환한다.
    - 특정 객체를 명시적으로 반환하면 : return문에 명시한 객체가 반환된다.
    - 원시값을 명시적으로 반환하면 : 원시값은 무시되고, 암묵적으로 this가 반환된다.

    ⇒ constructor 내부에서 명시적으로 다른 값을 반환하는 것 → 클래스의 기본 동작을 훼손한다. → return문을 반드시 생략해야한다.

### 2. 프로토타입 메서드

클래스의 프로토타입의 메서드

- 정의 방법

  - 생성자 함수의 프로토타입 메서드 추가 방법

    : `생성자함수.prototype.메서드이름 = ƒ`

  - 클래스의 프로토타입 메서드 추가 방법

    : `메서드이름() {}`

    - 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.

- 프로토타입 체인 : `인스턴스` —`[[Prototype]]`→ `클래스.prototype` —`[[Prototype]]`→ `Object.prototype`
  - 인스턴스는 프로토타입 메서드를 상속받아 사용할 수 있다.

### 3. 정적 메서드

인스턴스를 생성하지 않아도 호출할 수 있는 메서드

- 정의 방법 : `static 메서드이름() {}`

- 정적 메서드는 클래스에 바인딩된 메서드가 된다.
