/* -------------------------------- 배열 개요 ------------------------------- */
// 배열 리터럴을 통한 배열 생성
const arr = ['apple', 'banana', 'orange'];

// 요소 접근 : 대괄호 표기법
console.log(arr[0]); // 'apple'
console.log(arr[1]); // 'banana'

// length 프로퍼티 : 배열의 길이를 나타낸다. (배열의 요소 개수)
console.log(arr.length); // 3

// for문으로 요소를 순회할 수 있다 : 배열은 인덱스와 length를 가지기 때문
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 'apple', 'banana', 'orange'
}

// 배열의 타입은 object 이다.
console.log(typeof arr); // object

// 배열의 생성자 함수 : Array
console.log(arr.constructor); // [Function: Array]

// 배열의 프로토타입 객체 : Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

/* ------------------------------ 배열과 객체의 성능 비교 ----------------------------- */
// 배열이 일반 객체보다 요소에 접근하는 속도가 빠르다.
// 배열의 성능
const arrPerf = [];

console.time('Array Perfomance Test');

for (let i = 0; i < 10000000; i++) {
  arrPerf[i] = i;
}

console.timeEnd('Array Perfomance Test'); // Array Perfomance Test: 313.178ms

// 객체의 성능
const objPerf = {};

console.time('Object Perfomance Test');

for (let i = 0; i < 10000000; i++) {
  objPerf[i] = i;
}

console.timeEnd('Object Perfomance Test'); // Object Perfomance Test: 518.416ms

/* ------------------------------- length 프로퍼티 ------------------------------ */
/**
  length 프로퍼티
  - 배열의 길이를 나타낸다.
  - 0 이상의 정수
 */

// 1. 빈 배열
// ① 빈 배열인 경우 : 0
console.log([].length); // 0
// ② 빈 배열이 아닌 경우 : 가장 큰 인덱스 + 1
console.log([1, 2, 3].length); // 3

// 2. 배열 요소를 추가, 삭제하면 자동 갱신된다.
const arrLength = [1, 2, 3, 4, 5];
console.log(arrLength.length); // 5

arrLength.push(6);
console.log(arrLength.length); // 6

arrLength.pop();
arrLength.pop();
console.log(arrLength.length); // 4

// 3. length 프로퍼티 값에 임의의 숫자 값을 명시적으로 할당할 수 있다.
// ① 현재 length 프로퍼티 값보다 작은 숫자 값을 할당할 때
arrLength.length = 3;
console.log(arrLength); // [ 1, 2, 3 ]

// ② 현재 length 프로퍼티 값보다 큰 숫자값을 할당할 때
arrLength.length = 6;
// - length 프로퍼티 값은 변경된다.
console.log(arrLength.length); // 6
// - 실제로 배열의 길이가 늘어나지는 않는다. empty items는 배열의 요소가 아니다.
console.log(arrLength); // [ 1, 2, 3, <3 empty items> ]
// - 값 없이 비어 있는 요소를 위해 메모리 공간을 확보하지 않는다.
// - 빈 요소를 생성하지 않는다.
console.log(Object.getOwnPropertyDescriptors(arrLength));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 6, writable: true, enumerable: false, configurable: false }
}
*/

// 4. 희소 배열 : 배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열
// - 자바스크립트는 희소 배열을 문법적으로 허용한다.
const sparse = [, 2, , 4];

// - 희소배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다.
// 희소 배열의 length
console.log(sparse.length); // 4
// 실제 요소는 2, 4로 2개이다.
console.log(sparse); // [ <1 empty item>, 2, <1 empty item>, 4 ]

// - 비어 있는 부분은 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(sparse));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/

/* 희소 배열을 생성하지 않도록 주의해야 한다.
  - 의도적으로 희소 배열을 만들어야 하는 상황은 발생하지 않는다.
  - 희소 배열은 연속적인 값의 집합이라는 배열의 기본적인 개념과 맞지 않는다.
  - 선응에 악영향을 준다.
*/

/* -------------------------------- 배열 생성 방식 -------------------------------- */

// 1. 배열 리터럴
// ① 0개 이상의 요소를 쉼표로 구분, 대괄호로 묶는다.
// 배열 리터럴은 프로퍼티 키가 없고, 값만 존재한다.
const arrLit = ['a', 'b', 'c'];
console.log(arrLit); // [ 'a', 'b', 'c' ]

// ② 배열 리터럴에 요소를 하나도 추가하지 않으면 빈 배열이 된다.
const arrEmpty = [];
console.log(arrEmpty.length); // 0

// ③ 배열 리터럴에 요소를 생략하면 희소 배열이 생성된다.
const arrSparse = ['a', , '', 'd'];
console.log(arrSparse); // [ 'a', <1 empty item>, '', 'd' ]
console.log(arrSparse.length); // 4
// 객체인 arrSparse에 프로퍼티 키가 '1'인 프로퍼티가 존재하지 않기 때문에 undefined
console.log(arrSparse[1]); // undefined

// 2. Array 생성자 함수 : 전달되는 인수의 개수에 따라 다르게 동작한다.
// ① 전달된 인수가 1개이고 숫자인 경우: 인수는 length 프로퍼티의 값이 된다.
const arrCons = new Array(10);
console.log(arrCons.length); // 10

// ①-1 생성된 배열은 희소배열이 된다.
console.log(arrCons); // [ <10 empty items> ]

// ①-2 전달된 인수가 최대 범위를 벗어나면 : RangeError가 발생한다.
// 배열이 가질 수 있는 요소의 최대 개수가 (2**32 - 1)개 이므로 인수의 최대값 또한 (2**32 - 1)이다.
console.log(new Array(4294967296)); // RangeError: Invalid array length

// ①-3 전달된 인수가 음수 : RangeError가 발생한다.
console.log(new Array(-1)); // RangeError: Invalid array length

// ② 전달된 인수가 없는 경우 : 빈 배열을 생성한다.
console.log(new Array()); // []

// ③ 전달된 인수가 2개 이상 : 인수를 요소로 갖는 배열을 생성한다.
console.log(new Array(1, 2, 3)); // [ 1, 2, 3 ]

// ④ 전달된 인수가 숫자가 아닌 경우 : 인수를 요소로 갖는 배열을 생성한다.
console.log(new Array({})); // [{}]

// ⑤ new 연산자와 함께 호출하지 않아도 배열을 생성하는 생성자 함수로 동작한다.
// = 일반 함수로서 호출해도 배열을 생성하는 생성자 함수로 동작한다.
// ⇒ Array 생성자 함수 내부에서 new.target을 확인하기 때문이다.

// 3. Array.of : 전달된 인수를 요소로 가지는 배열을 생성한다.
// Array.of는 Array 생성자 함수의 정적 메서드
// 인수가 1개이고 숫자더라도 인수는 요소로 동작한다.
console.log(Array.of(1)); // [ 1 ]
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
console.log(Array.of('s', 'tr', 'ing')); // [ 's', 'tr', 'ing' ]

// 4. Array.from : 유사 배열 객체 or 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.
// Array.from은 Array 생성자 함수의 정적 메서드
// ① 유사 배열 객체를 배열로 변환하여 반환한다.
console.log(Array.from({ length: 2, 0: 'a', 1: 'b' })); // [ 'a', 'b' ]

// length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
console.log(Array.from({ length: 3 })); // [ undefined, undefined, undefined ]

// 유사 배열 객체 : 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체, 순회할 수 있다.
const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

// 유사배열 객체는 for문으로 순회할 수 있다.
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // a b c
}

// ② 이터러블을 배열로 변환하여 반환한다.
// 문자열은 이터러블이다.
console.log(Array.from('Hello')); // [ 'H', 'e', 'l', 'l', 'o' ]

// 이터러블 객체 : Symbol.iterator 메서드를 구현하여 for...of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있는 객체
// Array, String, Map, Set, DOM 컬렉션(NodeList, HTMLCollection), arguments

// ③ 두 번째 인수로 콜백함수를 전달할 수 있다 : 값을 만들면서 요소를 채울 수 있다.
console.log(Array.from({ length: 3 }, (_, i) => i)); // [ 0, 1, 2 ]
Array.from('Hello', v => console.log(v)); // H e l l o

/* -------------------------------- 배열 요소 참조 -------------------------------- */
// 1. 배열 요소를 참조할 떄는 대괄호 표기법을 사용한다.
// 인덱스
// - 대괄호 안에는 인덱스가 와야 한다.
// - 인덱스는 값을 참조할 수 있다는 의미에서 객체의 프로퍼티 키와 같은 역할을 한다.
// - 정수로 평가되는 표현식이라면 인덱스 대신 사용할 수 있다.
const arrIndex = [1, 2, 3];
// 인덱스가 0인 요소를 참조
console.log(arrIndex[0]); // 1
// 정수로 평가되는 표현식으로 인덱스를 대체할 수 있다. 인덱스가 1인 요소를 참조
console.log(arrIndex[10 - 9]); // 2

// 2. 존재하지 않는 요소에 접근
// 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 갖는 객체라고 볼 수 있다. 존재하지 않는 프로퍼티에 접근했을 때 undefined를 반환하는 것처럼 배열 또한 존재하지 않는 요소를 참조하면 undefined를 반환한다.

// ① 존재하지 않는 인덱스로 접근하면 undefined가 반환된다.
console.log(arrIndex[4]); // undefined

// ② 희소 배열의 존재하지 않는 요소를 참조하면 undefined가 반환된다.
const arrSparseUndefined = [1, , 3];
console.log(arrSparseUndefined[1]); // undefined

/* ------------------------------ 배열 요소의 추가, 갱신, 삭제 ----------------------------- */

// 1. 배열에 요소를 동적으로 추가할 수 있다.
const arrAdd = [0];
arrAdd[1] = 1;
console.log(arrAdd); // [ 0, 1 ]
console.log(arrAdd.length); // 2

// 2. 현재 배열의 length 프로퍼티 값보다 큰 인덱스로 추가하면 희소 배열이 된다.
arrAdd[10] = 100;
console.log(arrAdd); // [ 0, 1, <8 empty items>, 100 ]
console.log(arrAdd.length); // 11
// 인덱스로 요소에 접근해 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다.
console.log(Object.getOwnPropertyDescriptors(arrAdd));
/*
  {
    '0': { value: 0, writable: true, enumerable: true, configurable: true },
    '1': { value: 1, writable: true, enumerable: true, configurable: true },
    '10': { value: 100, writable: true, enumerable: true, configurable: true },
    length: { value: 11, writable: true, enumerable: false, configurable: false }
  }
*/

// 2. 이미 요소가 존재하는 인덱스에 값을 재할당하면 요소 값이 갱신된다.
arrAdd[1] = 10;
console.log(arrAdd); // [ 0, 10, <8 empty items>, 100 ]

// 3. 인덱스에 정수 이외의 값을 사용하면
const arrProp = [];
// ① 문자열이지만 정수 형태이면 인덱스로 해석된다.
arrProp[0] = 1;
arrProp['1'] = 2;
console.log(arrProp); // [ 1, 2 ]

// ② 정수 형태가 아닌 값을 사용하면 요소가 아닌 프로퍼티가 생성된다.
arrProp['foo'] = 3;
arrProp.bar = 4;
arrProp[1.1] = 5;
arrProp[-1] = 6;
console.log(arrProp); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]

// ③ 추가된 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다.
console.log(arrProp.length); // 2

// 4. 배열 요소의 삭제
const arrDel = [1, 2, 3];
// ① 배열은 객체이므로 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.
// - delete 연산자 : 객체의 플퍼티를 삭제한다.
delete arrDel[1];
// - delete 연산자로 프로퍼티를 삭제하면 희소 배열이 된다.
console.log(arrDel); // [ 1, <1 empty item>, 3 ]

// ② length 프로퍼티에 영향을 주지 않고, 희소 배열이 된다.
console.log(arrDel.length); // 3

// ③ Array.prototype.splice 메서드
// - 희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제할 수 있다.
const arrSplice = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
arrSplice.splice(1, 1);
// 희소 배열을 만들지 않는다.
console.log(arrSplice); // [ 1, 3 ]
// length 프로퍼티가 자동 갱신된다.
console.log(arrSplice.length); // 2
