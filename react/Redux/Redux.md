# Redux

## Context API와 비교한 redux의 장점

**① 미들웨어**

- 리덕스에는 미들웨어를 사용할 수 있다.
- 미들웨어는 비동기 작업을 더욱 체계적으로 관리할 수 있다.

**② 유용한 함수와 hooks**

- connect : 전역적인 상태, 액션을 디스패치하는 함수들을 props로 전달받아 사용할 수 있다.
- useSelector, useDispatch, useStore : 리덕스에서 관리하고 있는 상태를 쉽게 조회하거나, 액션을 쉽게 디스패치할 수 있다. <span style="color: gray">(context API의 경우 이런 것들을 직접 만들어야 한다.)</span>

**③ 기본적인 최적화가 이미 되어있다.**

- 상태를 받아와서 사용하게될 때, 이미 최적화가 어느정도 되어있기 때문에 필요한 상태가 바뀔 때에만 리렌더링되는 기능이 있다.

**④ 하나의 커다란 상태**

- context API를 사용해 전역상태를 관리하는 경우 기능별로 context API를 사용하는 것이 일반적이다.
- redux에서는 모든 전역상태를 하나의 커다란 객체에 넣어서 사용하는 것이 필수이다.
- 매번 컨텍스트를 만드는 수고를 덜 수 있다.

**⑤ DevTools**

- 현재 상태를 한눈에 볼 수 있고, 어떤 변화가 있었는지 볼 수 있고, 특정 시점으로 상태를 되돌릴 수도 있다.

## 언제 Redux를 사용해야할까?

- 프로젝트 규모가 클때
- 비동기 작업을 자주하게 될 때 리덕스와 리덕스 미들웨어를 사용하면 깔끔하고 체계적으로 비동기 작업을 관리할 수 있다.

## 리덕스 관련 키워드

### action 액션

- 업데이트 해야될 때 어떻게 업데이트할지 정의하는 객체
- 상태에 어떤 변화가 필요할 때 액션을 발생시킨다.
- 액션은 객체형태
- `type` (필수) : 리덕스에서 상태를 업데이트할 때 type을 보고 어떻게 업데이트할지 결정한다. 상수로 선언한다.

```json
{
  "type": "CHANGE_INPUT",
  "text": "안녕하세요"
}
```

### action creator 액션 생성 함수

- 액션을 만들어주는 함수
- 단순히 매개변수를 받아와서 액션 객체를 생성한다.
- 리덕스를 사용하면 action creator가 필수는 아니다. 다만 action creator를 통해 더 편하게 액션을 만들 수 있다.

```js
export function addTodo(data) {
  return {
    type: 'ADD_TODO',
    data,
  };
}

// 화살표 함수
export const changeInput = text => ({
  type: 'CHANGE_INPUT',
  text,
});
```

### reducer

- 변화를 일으키는 함수
- state와 action 두가지의 매개변수를 받는다.
- 배열이나 객체인 경우 불변성을 반드시 유지해야한다.
- useReducer를 사용했을 때는 switch문의 `default` 부분에 에러메시지를 던져주지만, 리덕스의 경우 기존의 state를 반환하는 형태로 작성해야한다. 여러개의 리듀서를 만들고 root 리듀서를 만들기 때문이다.

```js
function counter(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}
```

### Store 스토어

- 리덕스를 사용하게 되면 한 애플리케이션당 한개의 스토어를 만든다.
- 스토어 안에는 현재 앱의 상태와 리듀서가 들어있고, 추가적으로 내장함수가 들어있다.

#### dispatch 디스패치 (스토어 내장함수)

- 스토어의 내장함수 중 하나
- 액션을 발생시키는 함수 or 액션을 스토어에 전달하는 함수
- 액션 객체를 만들어서 dispatch의 매개변수로 넣어서 호출한다. 해당 액션이 리듀서에 전달되어 리듀서가 새로운 상태를 반환한다.

```js
dispatch({ type: 'INCREASE' });
```

#### subscribe 구독 (스토어 내장함수)

- 스토어의 내장함수 중 하나
- subscribe 함수를 호출할 때 인수로 특정 함수를 넣으면 액션이 디스패치될 때마다 설정한 함수<span style="color: gray">(인수로 넣은 함수)</span>가 호출된다.
- 스토어의 상태가 업데이트될 때마다 특정 함수를 호출할 수 있다.
- 리액트에서 리덕스를 사용할 때 이 함수를 직접 사용할 일을 없지만, react-redux 라이브러리의 connect함수나 useSelector 훅을 사용해서 스토어의 상태가 업데이트되면 컴포넌트가 리렌더링되는 작업을 대신 처리한다.
- 컴포넌트를 만들면 컴포넌트가 리덕스를 구독하게 된다. 그래서 리덕스 상태가 업데이트되면 컴포넌트도 리렌더링된다.

## Redux의 세가지 규칙

1. 하나의 애플리케이션에는 하나의 스토어가 있다.
2. 상태는 읽기전용이다.
3. 변화를 일으키는 리듀서 함수는 순수함수여야 한다.
   1. 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받는다.
   2. 이전의 상태는 절대 변경하지 않고, 변화를 일으킨 새로운 상태 객체를 만들어 반환한다.
   3. 같은 파라미터로 호출된 리듀서 함수는 언제나 같은 결과값을 반환해야한다.
   4. `new Date()`, `Math.random()`, `axios.get()` 와 같은 함수는 다른 값을 반환할 수 있으므로 사용하지 말아야 한다. (컴포넌트나 미들웨어에서 사용해야한다)
   5. 리듀서 밖의 변수에 의존해서는 안된다. (상수는 괜찮다.)

## Redux Module

- 액션 타입 + 액션 생성 함수 + 리듀서를 한 파일에 선언하기 (Ducks패턴)
- 리듀서는 export default로, 액션 생성 함수는 export 로 내보낸다.

## redux directory structure

- 관리해야할 것들 : 액션 타입, 액션 크리에이터 함수, 초기값, 리듀서
- store.js : Redux 스토어 구성

## createStore

```js
createStore(reducer, [preloadedState], [enhancer]);
```

<span style="background-color: linen">**인수**</span>

`reducer` (Function): 주어진 현재 상태 트리와 액션에서 다음 상태 트리를 반환하는 리듀싱 함수입니다.

`[preloadedState]` (any): 초기 상태입니다.
유니버설 앱의 서버나 이전의 직렬화된 사용자 세션에서 상태를 채우기 위해 선택적으로 지정할 수 있습니다.
만약 combineReducers로 리듀서를 만들었다면, 이 인수는 전달했던 것과 같은 키 구조를 가지는 평범한 객체여야 합니다.
그렇지 않다면 리듀서가 이해할 수 있는 어떤 것도 사용할 수 있습니다.

`[enhancer]` (Function): 저장소 인핸서입니다.
미들웨어나 시간여행, 영속성 등의 서드파티 기능을 저장소에 추가하기 위해 지정할 수 있습니다.
Redux와 함께 제공되는 인핸서는 applyMiddleware() 뿐입니다.

<span style="background-color: linen">**반환값**</span>

**`Store`** : 앱의 전체 상태를 가지고 있는 객체입니다.
이 객체의 상태를 바꾸는 유일한 방법은 액션을 보내는것 뿐입니다.
UI를 업데이트 하기 위해 상태를 구독 할 수도 있습니다.

## root reducer

관리할 상태가 복잡하고 증가하면 리듀싱 함수를 상태의 독립된 부분을 관리하는 함수들로 분리하고, 이들을 하나의 함수로 묶어줄 수 있다.

이를 하나로 묶어주는 함수를 root reducer라 하고, 헬퍼 함수 `combineRecucer()` 에 묶어줄 리듀싱 함수들을 객체 형태로 넣는다.

combineReducer 헬퍼 함수는 createStore에 넘길 수 있는 리듀싱 함수로 바꾼다.

```js
combineReducers({
  reducer1: ...,
  reducer2: ...,
})
```
