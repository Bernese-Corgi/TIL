# HTML의 구조

# HTML 이 읽는 범위

```html
<html>
  이 안에만 작성해야 html이 읽습니다
</html>
```

<html> 이 안에만 작성해야 읽을수 있다 </html>

## 자동 입력

`! + tab키` 를 누르면 다음 서식이 자동 완성된다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## html이 읽는 언어 설정

```html
<html lang="ko"></html>
```

`lang=”ko”` 읽는 언어가 한글임을 설정하는 속성

`lang=”en”` 읽는 언어가 영어임을 설정하는 속성

## 정보 / 구조를 구분하는 영역

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    문서의 정보를 입력
  </head>
  <body>
    문서의 구조를 입력
  </body>
</html>
```

`<!DOCTYPE html>` : 이문서의 타입이 무엇인지 명시하는 부분

`<head>` : 문서의 정보를 명시하는 부분

`<body>` : 문서의 구조를 명시하는 부분
