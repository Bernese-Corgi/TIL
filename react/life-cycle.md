# 라이플 사이클

Will : 어떤 작업을 작동하기 전에 실행

Did : 어떤 작업 작동한 후에 실행되는 메서드

## 마운트

- DOM이 생성되고 웹 브라우저 상에 나타나는 것

1. **constructor** : 컴포넌트를 새로 만들 때마다 호출
2. **getDrivedStateFromProps** : props에 있는 값을 state에 넣을 때 사용
3. **render** : 준비한 UI를 랜더링
4. **componentDidMount** : 컴포넌트가 웹 브라우저상에 나타난 후 호출

## 업데이트

컴포넌트가 업데이트되는 조건

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때
