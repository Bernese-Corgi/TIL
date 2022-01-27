# `<base>`

문서 안의 모든 상대 URL이 사용할 기준 URL을 지정

상대경로를 입력할때 중복되는 부분을 기준으로 `base` 태그를 설정한다.

`base`태그는 html문서에서 하나만 쓸 수 있다.

→ 그러므로 주요하게 쓰일 경로만 입력한다.

## 속성

`href` 문서 내 상대 URL이 사용할 기준 URL. 절대 및 상대 URL을 사용할 수 있습니다.

## 상대경로

```html
<link rel="stylesheet" href="./main.css" hreflang="ko" />
```

`./main.css` 는 상대경로 : 상대적으로 참조하는것.

→ `./` 는 주변에서 가져온다는 뜻

![image](https://user-images.githubusercontent.com/72931773/151359389-aa8d96f6-7d13-4a80-bffa-298eb1b63adf.png)

`./`을 입력하면 근처 위치에 있는 파일 및 폴더가 표시되고, 그 중에서 폴더를 선택하면 그 폴더 안에 있는 파일/폴더들이 표시된다.

```html
<link rel="stylesheet" href="./css/main.css" />
```

→ css폴더 안에 있는 main.css 파일을 가져온다.

## 예시

```html
<head>
  <base href="https://heropcode.github.io/GitHub-Responsive/" />
</head>
<body>
  <img src="img/bg-small.jpg" alt="샘플이미지" />
  <img src="img/feature-tile__build.png" alt="샘플이미지2" />
</body>
```

![image](https://user-images.githubusercontent.com/72931773/151359459-64047e3f-f9db-4e9f-89db-e2efa0c71e9e.png)

- 샘플이미지의 경로 : https://heropcode.github.io/GitHub-Responsive/img/bg-small.jpg
- 샘플이미지2의 경로 : https://heropcode.github.io/GitHub-Responsive/img/feature-tile__build.png

https://heropcode.github.io/GitHub-Responsive/ 부분이 겹치기 때문에 이를 base태그로 설정하고 뒷부분만 작성하면 전체 링크가 첨부된다.
