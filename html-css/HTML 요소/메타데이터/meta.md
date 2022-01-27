# `<meta>`

```html
<head>
  <meta charset="UTF-8" />
  <title>HTML 요소 레퍼런스</title>
</head>
<body>
  문서의 구조를 입력
</body>
```

## 성격

닫히는 태그가 존재하지 않는다.

속성을 부여해야한다

itemprop 속성을 name, http-equiv, charset 속성과 함께 쓸 수 없다.

만약 name이나 http-equiv중 하나를 사용했다면 반드시 content속성을 사용해야 합니다. 그렇지 않으면 그것들은 생략되어야 합니다.

한 문서에서 charset속성을 가진 하나의 meta속성만 사용할 수 있습니다.

## 속성

1. `charset=””` : **문자의 인코딩방식**

   UTF-8을 보편적으로 사용함

   EUC-KR도 한글문자 인코딩방식

   - EUC-KR
     - 완성형 ex. **최 진 영**
     - 글자가 깨질 수 있다
     - 오래된 사이트에서 사용함
   - UTF-8
     - 조합형 ex. **ㅊ ㅗ ㅣ ㅈ ㅣ ㄴ ㅇ ㅕ ㅇ**
     - 글자가 깨지지 않는다.
     - 가장 보편적으로 사용한다

2. `content=””` : **http-equiv 또는 name 속성의 값을 담는다**
3. `http-equiv`

   서버나 사용자의 환경에 작동방식을 변경해주는 지시사항을 명시

   internet explorer 브라우저에서 우리가 사용하는 웹사이트가 어떤 internet explorer 버전에서 최적화되어서 나올수 있는지에 대한 랜더링 방식을 명시

   internet explorer 브라우저를 사용하지 않는다면 필요가 없을수 있겠지만 일반적으로 많이 명시해두는 편이다.

4. `name`

   정보를 지칭할때 정보의 종류가 무엇인지 작성하는것

   `<meta name=” ”`

   - `author` : 문서의 작성자를 정의
   - `description` : 페이지의 내용에 대한 짧고 정확한 요약. firefox나 오페라와 같은 여러 브라우저에서도 이를 즐겨찾기 페이지의 기본 설명값으로 사용
   - `generator` : 페이지를 생성한 소프트웨어의 식별자를 담고 있다
   - `keywords` : 콤마 , 로 구분된 페이지의 내용과 관련된 단어를 담고 있다
   - `referrer` : 문서에서 전송된 요청에 첨부된 http헤더의 참조자를 제어

5. `itemprop` : **“사용자정의 메타데이터”를 제공**

## 예시

1. 여러가지 meta속성을 적용

   ```html
   <head>
     <meta charset="UTF-8" />
     <title>HTML 요소 레퍼런스</title>
     <meta name="author" content="최진영" />
     <meta name="discription" content="최진영의 사이트입니다!" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   </head>
   ```

   `<meta http-equiv="X-UA-Compatible" content="IE=edge">`

   - internet explorer에서 랜더링 될때 최신의 internet explorer 랜더링 방식을 이용하는것

2. `meta name=“viewport”`

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

   `! + tab`키 누르면 작성되는 내용

   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

   viewport 화면에 정보를 랜더링 하기 위한 영역을 설정할 때 사용

   width=device-width, initial-scale=1.0 사용하는 장치(divice) 에 최적화된 가로너비를 제공하고, 확대 축소의 기본값을 1로 설정한다.
