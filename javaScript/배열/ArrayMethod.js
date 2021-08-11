/* -------------------------------------------------------------------------- */
/*                                   배열 메서드                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------- 배열 메서드 개요 ------------------------------- */
// 1. Array / Array.prototype
// 자바스크립트는 다양한 배열 빌트인 메서드를 제공한다.
// ① Array 생성자 함수 : 정적 메서드 제공
// ② Array.prototype : 프로토타입 메서드를 제공

// 2. mutator / accessor
const arrOrigin = [1];

// ① mutator : 원본 배열을 직접 변경하는 메서드
// - 외부 상태를 직접 변경하는 부수효과가 있다.
const mutator = arrOrigin.push(2);
console.log(arrOrigin); // [ 1, 2 ]
console.log(mutator); // 2

// ② accessor : 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드
const accesor = arrOrigin.concat(3);
console.log(arrOrigin); // [ 1, 2 ]
console.log(accesor); // [ 1, 2, 3 ]

// * 원본 배열
// - 배열 메서드를 호출한 배열.
// - 배열 메서드의 구현체 내부에서 this가 가리키는 객체

/* --------------------------------- 배열 메서드 --------------------------------- */
// 1. Array.isArray : 배열인지 아닌지 판단하여 true, false를 반환한다.
// Array 생성자 함수의 정적 메서드
// Array.isArray(배열인지 판명할 것); // => true or false
// 인수 : 배열인지 아닌지 판단할 것
// 반환 : boolean. 인수가 배열이면 true, 배열이 아니면 false
// ① true
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(Array.of()));
console.log(Array.isArray(Array.from({ length: 2 })));

// ② false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(1));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({ 0: 1, length: 1 }));

// 2. Array.prototype.indexOf : 원본 배열에서 요소를 검색하여 인덱스를 반환한다.
// Array.prototype.indexOf(배열에서 찾을 요소[, 검색을 시작할 인덱스]) // => 검색한 요소에 해당하는 인덱스 or -1
// 인수 : (배열에서 찾을 요소[, 검색을 시작할 인덱스])
// 반환값 : 검색한 요소에 해당하는 인덱스 or -1
const arrIndexOf = [1, 2, 2, 3];

// ① 중복되는 요소가 여러 개 있어도 첫번째로 검색된 요소의 인덱스 하나만 반환한다.
console.log(arrIndexOf.indexOf(2)); // 1

// ② 요소가 존재하지 않으면 -1을 반환한다.
console.log(arrIndexOf.indexOf(4)); // -1

// ③ 두번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
console.log(arrOrigin.indexOf(2, 2));
// - 생략할 경우 처음부터 검색한다.

// ④ indexOf는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// beasts.indexOf('crocodile')이 -1로 평가되면 요소 crocodile이 존재하지 않는 것이다.
if (beasts.indexOf('crocodile') === -1) {
  // beasts 배열에 'crocodile' 요소가 존재하지 않으면 추가한다.
  beasts.push('crocodile');
}

console.log(beasts); // [ 'ant', 'bison', 'camel', 'duck', 'bison', 'crocodile' ]

// ⑤ Array.prototype.includes 메서드로 대체할 수 있다.

// (!beasts.includes('owl'))이 true로 평가되면 요소 owl이 존재하지 않는 것이다.
if (!beasts.includes('owl')) {
  // beasts 배열에 'owl' 요소가 존재하지 않으면 추가한다.
  beasts.push('owl');
}

console.log(beasts); // [ 'ant', 'bison', 'camel', 'duck', 'bison', 'crocodile' ]

// 3. Array.prototype.push : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
// 인수 : (배열의 끝에 추가할 요소[, ... [, 배열의 끝에 추가할 요소]])
// 반환 값 : 변경된 배열의 새로운 length 속성
// mutator. 원본 배열을 직접 변경한다.
const arrPush = ['pigs', 'goats', 'sheep'];

// ① 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가한다.
let countPush = arrPush.push('cows', 'cats');
// ② 변경된 배열의 갱신된 length 프로퍼티 값을 반환한다.
console.log(countPush); // 6
// ③ 원본 배열이 직접 변경되는 부수 효과가 발생한다.
console.log(arrPush); // [ 'pigs', 'goats', 'sheep', 'cows', 'cats' ]

// ④ 스프레드 문법으로 대체할 수 있다.
const arrSpread = [...arrPush, 'dogs'];
console.log(arrSpread); // [ 'pigs', 'goats', 'sheep', 'cows', 'cats', 'dogs' ]

// 4. Array.prototype.pop : 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
// 인수 : 없음
// 반환값 : 배열에서 제거한 요소를 반환한다. 빈 배열이면 undefined를 반환한다.
// mutator : 원본 배열을 직접 변경한다.

const arrPop = [1, 2];

// 원본 배열에서 마지막 요소를 제거한다.
let elemPop = arrPop.pop();
// 제거된 요소를 반환한다.
console.log(elemPop); // 2

// 5. Array.prototype.unshift
const arrUnshift = [1, 2];

let elemUnshift = arrUnshift.unshift(3, 4);
console.log(elemUnshift); // 4

console.log(arrUnshift); // [3, 4, 1, 2]

// ①②③④⑤
