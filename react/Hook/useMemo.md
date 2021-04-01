# useMemo

- useMemo는 특정 값이 바뀌었을 때만 특정 함수를 실행해서 연산을 처리한다.
- 원하는 값이 바뀌지 않았다면 리렌더링할 때 이전에 만들어놨던 값을 재사용할 수 있게 한다.
- 이전에 연산된 값을 재사용하기 위한 hook이다. (성능 최적화 측면)

```js
const memoizedValue = React.useMemo(
  // 첫번째 매개변수 : 함수형태
  () => computeExpensiveValue(a, b),
  // 두번째 인수 : deps 설정 → deps 배열 안의 값이 변경될 때에만 콜백함수를 실행한다.
  [a, b]
)
```

<span style="background-color:linen">**인수**</span>

1. 콜백 함수 : 렌더링 중에 실행된다. deps에 설정된 값이 변경되었을때만 실행된다.
2. `[dep1, dep2, ...]` : 의존성 값의 배열을 전달. 배열이 없는 경우 렌더링할 때마다 새 값을 계산한다.

<span style="background-color:linen">**예시**</span>

input의 value값이 변경될 때마다 컴포넌트가 리렌더링되면 연산처리 또한 value값이 변경될 때마다 수행되므로 이를 방지하기 위해서는 useMemo로 연산 함수를 콜백함수로 받아서 처리한다.

```js
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  // active가 true인 것들만 filter한 후 배열의 길이를 세기
  return users.filter((user) => user.active).length
}

export default function App() {
  /* ------------------------------------------------------- */
  const onChange = (e) => {
    // 상태를 바꿀 때 컴포넌트가 리렌더링된다
    // input의 value값이 변경될 때마다 컴포넌트가 리렌더링된다.
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  /* ------------------------------------------------------- */

  const count = React.useMemo(() => countActiveUsers(users), [users])
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {/* ------------------------ */}
      <div>활성 사용자 수 {count}</div>
    </>
  )
}
```

[🔗 예시 링크](https://github.com/Bernese-Corgi/react-practice/commit/289ecbb696105875dd13d3a1f28b07fa8fffeb2c)
