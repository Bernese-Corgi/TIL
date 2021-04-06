# useReducer

- 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능하다.

## reducer 관련 용어 정리

### action 객체

- 업데이트할 때<span style="color: teal">(= 상태변화를 일으킬 때)</span> 참조하는 객체
- dispatch의 인수에서 redux로 넘길 객체(type)를 정의한다.
- Action이 실행되고 끝나면 type을 반환하는데, type은 reduce로 전달된다.

### reducer

- 상태를 업데이트하는 함수 (상태를 변경시키는 로직이 있는 함수)
- 순수함수여야 한다 : 결과값을 반환할 때는 매개변수 값에만 의존해야하고, 언제나 같은 결과를 반환해야한다.
- reducer에서 state를 사용한다면 반드시 state를 초기화해야 한다.
- reducer에서 state의 변화가 일어난다.
- 값의 갱신은 reducer에서만 일어나야한다.

### dispatch

- 액션을 스토어에 전달하는 것을 의미한다.

```js
const [number, dispatch] = useReducer(reducer, 0);

dispatch({ type: 'INCREAMENT' });
```

## useState와 useReducer의 비교

- 컴포넌트에서 관리하는 값이 단 한가지이고, 그 값이 단순한 숫자, 문자열, 불리언인 경우 확실하게 **useState**로 관리하는 것이 편하다
- 컴포넌트에서 관리하는 값이 여러개가 되어서, 상태의 구조가 복잡해지거나, 배열에 추가, 삭제, 변경 등의 행위가 필요한 경우 **useReducer**를 사용하는 것이 편하다.
- setState를 한가지 함수 내에서 여러번 사용하게 된다면, **useReducer**로 변경시켜주는 것이 권장된다.

## Reference

[[REDUX] Redux 개념, 구조, 실습](https://hwan1001.tistory.com/38)
