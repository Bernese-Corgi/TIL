# useCallback

- 이전에 만들었던 함수를 새로 만들지 않고 재사용
- useCallback은 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.

## useCallback 함수가 필요한 이유?

- 이벤트 핸들러 함수들은 컴포넌트가 리렌더링될때마다 함수가 생성된다.
- 이런 방식이 대체로 별로 문제가 없지만, 컴포넌트의 렌더링이 자주 발생하거나 렌더링할 컴포넌트가 많아지면 최적화해주는 것이 좋다.
- 컴포넌트들의 props가 바뀌지 않았을 때에는 가상돔에서 리렌더링하지 않도록 만들 수 있는데, 이 때 함수들이 매번 생성되는 방식이라면 이전에 만든 결과물을 추적할 수 없기 때문에 한번 만든 함수는 재사용할 수 있도록 만들어야한다.

## useCallback의 사용

```js
const memoizedCallback = useCallback(
  // 첫번째 인수 : 생성하고 싶은 함수
  () => {
    doSomething(a, b)
  },
  // 두번째 인수 : deps
  [a, b]
)
```

<span style="background-color: linen">**인수**</span>

1. 생성하고 싶은 함수
2. 배열(deps)
   - 배열 안의 값들이 바뀔때 함수를 새로 생성한다.
   - 빈배열인 경우 컴포넌트가 렌더링될 때 한 번만 함수가 생성된다.
   - 함수를 props로 받아와서 콜백 내부에서 사용해야 한다면 이것도 deps에 넣어야 한다.

[🔗 예시 링크](https://github.com/Bernese-Corgi/react-practice/commit/08e45f51c8bde9f066985e9424c522531c1490c0)
