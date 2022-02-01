# Node.js 기초

- [Node.js 기초](#nodejs-기초)
  - [Node.js란?](#nodejs란)
  - [모듈 패턴](#모듈-패턴)
  - [npm](#npm)

## Node.js란?

- 웹 브라우저에서 쓰이는 자바스크립트를 서버에서 사용가능
  = 자바스크립트 문법을 서버에서 사용할 수 있음
- 자바스크립트 엔진인 v8의 탑재를 가능하게 했다.
- 대용량 서비스를 위해 라이언 달이 개발함
- 웹 서버에서 주로 많이 사용된다.
- Node.js의 특성 상 CPU를 많이 사용하는 작업에서는 선호되지 않고, 웹 서버로 그때그때 바로 대답을 하는 쪽에서 많이 사용된다.

## 모듈 패턴

- 파일을 특정한 기능으로 분리하는 것을 모듈화라고 한다.
- 내보낼 때 : `module.export b변수`
- 불러올 때 : `require 파일명`

```jsx
module.exports.a = 'hello a';
```

```jsx
const myvar = require('./myvar');

console.log(myvar.a);
```

```bash
node index.js # hello a
```

## npm

다른 개발자가 만든 모듈을 가져와보자

- `npm init`
- `npm install 모듈` : 모듈 패키지를 설치
  ⇒ node_modules 폴더가 설치되면, `require` 명령어로 파일을 불러와서 사용할 수 있게 된다
- `package.json` 파일의 `"dependencies"` 에서 설치된 패키지를 확인할 수 있다.
- `package-lock.json` 은 개발자들이 동일한 `node_module` 트리를 생성해서 같은 의존성을 설치할 수 있도록 보장
