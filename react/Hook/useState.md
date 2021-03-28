함수형 컴포넌트에도 상태(state)를 설정할 수 있습니다.

state와 state를 업데이트 하는 함수를 쌍으로 제공합니다

전달 받는 인자로 state의 초기 값을 설정합니다.

초기 값은 함수형 컴포넌트가 첫 렌더링 될 때 딱 한 번 사용됩니다.

```js
const [state, setState] = React.useState(initialValue)
```

## 하나 이상의 state 설정

함수형 컴포넌트 안에서 1개 이상의 state를 설정해 사용할 수도 있습니다.
