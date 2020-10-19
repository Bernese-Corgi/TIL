# HTML5 Markup

## # 새로운 표준 HTML5

## HTML의 탄생

1. HTML5가 탄생하기 이전까지 HTML의 최초 버전은 1993년에, 최신 버전은 1999년에 발표 됨

2. W3C가 XHTML1.0을 구체화 하기 위해 XHTML2.0 작업을 진행 중이었으나, **하위 호환상에 치명적인 문제**가 있었음.

   - W3C : 웹의 표준을 정하는 기구
   - **하위 호환상 치명적 문제**

     html은 누구나 웹페이지를 제작할 수 있는 **느슨한 룰셋**을 갖고 있었다.

     → html은 시작태그가 있으면 종료태그가 생략되는 경우도 많다.

     → 소/대문자 를 혼용하기도 함

     → **코드의 일관성을 떨어뜨림**

     → 그래서 등장한 것이 XHTML

     - XML : 기본적으로 시작태그가 있으면 종료태그가 무조건 있어야 한다는 등등 엄격한 규칙을 정해놓음
     - XHTML이 등장한 이유는 결국 기존의 규칙이 너무 느슨했기 때문

3. 2004년 애플, 모질라 재단, 오페라 소프트웨어가 공동으로 설립한 공개 그룹인 **WHATWG**(Web Hypertext Application Technology Working Group)가 W3C와 별개로 Web Application 1.0과 Web Forms 2.0을 만들어 냄

4. 2007년 3월 W3C가 공개적으로 XHTML 2.0의 실패를 인정한 후 새롭게 HTML을 개발하기로 결정하면서 **WHATWG의 표준안을 대부분 수용**하여 **HTML5가 탄생**하게 됨.

### 현재 표준 HTML

- HTML 5 (가장 최신)
- XHTML1.0
- HTML4.01

### 📍Markup

- **마크업 언어**는 **"마크(Mark)"로 둘러싸인 언어**

  **"태크(Tag)"**로 둘러싸였다고도 표현

  HTML, XML 등의 마크업 언어들은 문서의 구조를 정의합니다.

  쉽게 말하면 **문서의 골격에 해당하는 부분을 작성**하는데 사용합니다.

- 데이터를 주고받는 표준

### HTML 5 Markup

- API 가 포함!

## HTML의 탄생

- API : 자주 쓰는 함수들의 덩어리
- js
- HTML은 Markup.. 합친 용어???

## HTML4.01 vs XHTML 1.0 vs HTML5의 차이점

1. 새롭게 등장한 **콘텐츠 모델(Content Models)**

   명확한 정보 구조 설계 및 구성을 위해 카테고리를 정의하여 각 요소별로 비슷한 성격을 가지고 있는 것끼리 **그룹화**하였는데, 이를 HTML5의 **콘텐츠 모델**(Content Models)이라고 함.

2. **콘텐츠 모델의 카테고리(Category)**

   HTML5의 **카테고리(Category)**에는 Sectioning Root, Metadata Content, Flow Content, Sectioning Content, Heading Content, Phrasing Content, Embedded Content, Interactive Content, Palpable Content, Script-supporting Elements, Transparent Content 등의 그룹이 있으며, 하나의 요소가 여러 그룹에 속해 있을 수도 있고, 그렇지 않을 수도 있음

## HTML5의 콘텐츠 모델

![HTML5의 콘텐츠 모델](https://seulbinim.github.io/WSA/images/markup/content-model.png)
