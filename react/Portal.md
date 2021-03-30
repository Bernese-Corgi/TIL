# Portal

- 부모 컴포넌트의 DOM 계층 구조 밖에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법을 제공한다.

```js
ReactDOM.createPortal(child, container)
```

<div style="background-color: linen">인수</div>

1. `child` : element, 문자열, fragment 같은 어떤 종류이든 렌더링할 수 있는 React children.
2. `container` : DOM element

## 사용법

- 컴포넌트 렌더링 메서드에서 엘리먼트를 반환할 때, 그 엘리먼트는 부모 노드에서 가장 가까운 자식으로 DOM에 마운트된다.
- React는 새로운 엘리먼트를 마운트하고 그 안에 자식을 렌더링한다.

## 접근성의 준수

- portal을 이용하여 작업할 때 키보드 포커스 관리가 매우 중요하다.
