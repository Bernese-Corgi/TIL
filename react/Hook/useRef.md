# useRef

## DOM에 refs 전달하기

ref 전달 : 컴포넌트를 통해 자식 중 하나에 ref를 자동으로 전달하는 방법

<!-- ref가 필요없는 경우 : 다른 컴포넌트들이 일반적으로 내부 DOM요소에 대한 ref를 얻을 필요가 없는 경우. 컴포넌트들이  -->

일부 컴포넌트가 수신한 ref를 받아 더 아래로 전달<span style="color: teal">(전송)</span>할 수 있는 기능.

```js
React.forwardRef((props, ref) => ( ... ))
```
