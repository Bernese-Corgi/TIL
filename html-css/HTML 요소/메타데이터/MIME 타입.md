# MIME 타입

## MIME type의 용법

- 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘입니다
  → 연결하는 문서의 type종류를 명시해야 실제 웹에서 적용할때 오류를 줄일 수 있다.
- 웹에서 파일의 확장자는 별 의미가 없습니다. 그러므로, 각 문서와 함께 올바른 MIME 타입을 전송하도록, 서버가 정확히 설정하는 것이 중요합니다.
- 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작이 무엇인지를 결정하기 위해 대개 MIME 타입을 사용합니다.

## 스타일시트 포함하기

- 페이지에 스타일 시트를 포함하려면 아래 문법을 사용한다

```html
<link href="style.css" rel="stylesheet" />
```

- `href=” style.css”`
  → `` (공백) 부분에 특별한 특수기호가 없다면 `./` 이 생략된것이다.

## MIME type 개별타입 (외울필요X)

1. `text`

   텍스트를 포함하는 모든 문서를 나타내며 이론상으로는 인간이 읽을 수 있어야 합니다

   외부에 있는 html을 가져올 때 이 타입을 명시한다

   모든 HTML 컨텐츠는 이 타입과 함께 서브되어야 합니다.

   `text/plain`, `text/html`, `text/css`, `text/javascript`

2. `image`

   모든 종류의 이미지를 나타냅니다.

   (animated gif처럼) 애니메이션되는 이미지가 이미지 타입에 포함되긴 하지만, 비디오는 포함되지 않습니다.

   `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`

3. `audio`

   모든 종류의 오디오 파일들을 나타냅니다.

   `audio/midi`, `audio/mpeg`, `audio/webm`, `audio/ogg`, `audio/wav`

4. `video`

   모든 종류의 비디오 파일들을 나타냅니다.

   `video/webm`, `video/ogg`

5. `application`

모든 종류의 이진 데이터를 나타냅니다.

`application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf`
