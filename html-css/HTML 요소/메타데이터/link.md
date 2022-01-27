# `<link>`

`<link>`는 CSS를 연결할 때 제일 많이 사용하지만, 사이트 아이콘("파비콘"과 홈 화면 아이콘) 연결 등 여러가지로 쓰일 수 있습니다.
요소 구분: 문서 메타데이터

link태그는 빈태그이다

- `<link>` 예시
  ```html
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      . . .
      <link rel="stylesheet" href="./main.css" />
    </head>
    <body>
      문서의 구조를 입력
    </body>
  </html>
  ```
  ```css
  body {
    background: cadetblue;
  }
  ```
  ![image](https://user-images.githubusercontent.com/72931773/151359696-81c857fb-135f-4bbb-a943-f9904560333f.png)

## 속성

1. `href`

   연결할 리소스의 URL

   절대와 상대 URL 모두 가능

   상대경로 (상대 URL) : `./` 와 같이 주변에서 경로를 가져오는 URL

2. `hreflang`

   연결할 리소스가 사용하는 언어입니다. = 참고할 경로의 언어를 설명

   오직 제안하는 용도로만 사용합니다.

   → 이미 lang=”ko”가 위에 명시되어 있고 링크의 언어가 이와 동일하면 굳이 작성을 안해도 된다

   가능한 값은 BCP47 에 따릅니다.

   `href` 속성이 존재할 때만 사용하세요.

   ```html
   <link rel="stylesheet" href="./main.css" hreflang="ko" />
   ```

3. `rel`

   연결할 리소스와 현재 문서의 관계.

   [링크 유형](https://developer.mozilla.org/ko/docs/Web/HTML/Link_types)의 값을 공백으로 구분한 리스트를 지정해야 합니다.
