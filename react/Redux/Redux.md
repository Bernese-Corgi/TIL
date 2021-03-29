## redux directory structure

- 관리해야할 것들 : 액션 타입, 액션 크리에이터 함수, 초기값, 리듀서
- store.js : Redux 스토어 구성

## 액션 Action

1. action types 상수로 선언
2. action creater :

## createStore

```js
createStore(reducer, [preloadedState], [enhancer])
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
