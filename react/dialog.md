# Dialog

dialog는 대화상자 자체를 의미하고, modal은 대화상자 이외의 요소들을 선택하지 못하는 dim 처리를 위한 기능을 의미한다.

## 접근성의 준수

portal 만들 때, 논리적인 순서도 고려해야한다.

[WAI-ARIA Practice 1.1, W3C](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modalhttps://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) : 접근성을 준수한 다이얼로그(모달) 컴포넌트 설계 방법 안내

<div style="background-color: linen">WAI-ARIA 국제 표준 attribute</div>

`role="dialog"` : `div` 요소는 의미도 없고 포커싱도 되지 않는 요소이므로, dialog 역할을 부여해야한다.

`aria-modal` : boolean 값, 모달이 포함된 경우 `true`, 일반 다이얼로그인 경우 `false`

`tabindex` : 0 또는 -1을 줘야한다. 포커싱을 주는 방법! 포탈만 해서는 포커싱이 되지 않기 때문에, tabindex 속성을 주어야한다. js에서 포커싱 속성을 주더라도 tabindex가 0 또는 -1

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="signUpDialog"
  aria-describedby="signUpDialog__summary"
  tabindex="-1"
  class="signUpDialog"
>
  <!-- 시각적으로 타이틀이 표시되지 않을 경우 aria-label로 대체 -->
  <h3 id="signUpDialog">회원가입 폼</h3>

  <form id="signUpDialog__form" onsubmit="registerMember()">
    <!-- 회원 가입 폼 컨트롤 ... -->
  </form>

  <!-- 다이얼로그 닫기 버튼은 논리적으로 가장 마지막에 위치해야 함 -->
  <button
    type="button"
    class="signUpDialog__closeButton"
    aria-label="회원가입 폼 닫기"
    onclick="closeModalDialog()"
  >
    x
  </button>
</div>

<div role="presentation" class="signUpDialog__modal"></div>

<p class="a11yHidden" id="signUpDialog__summary">
  회원가입 폼 다이얼로그 설명 (옵션)
</p>
```

### 순환처리 (focus trap)

1. ref는 가상돔에서만 참조하므로, 돔이 마운트된 이후에 처리해야하므로 useEffect 안에서 처리해야한다.

```js
React.useEffect(() => {})
```

2. dialog 창에만 집중해야하므로, 나머지 요소들이 dim 처리 되어야 한다.

```js
if (visible) {
  const reactRootNode = document.getElementById('root')
  reactRootNode.setAttribute('aria-hidden', true)
}
```

opener에게 포커스 돌려주기

opener를 기억해놔야, dialog가 닫혔을때 포커스를 돌려줄 수 있다.
선언형 방식으로 기억하기 : useRef

로그인을 하면, sign in 버튼이 사라지므로 에러가 발생한다.
해결 -> sign in 버튼이 있을때만~ 이라는 조건을 주어야한다.

querySelectorAll로 실제 그려진 모든 dialog 돔들을 잡는다.

### 탈출 후의 포커스 처리

esc를 눌러 dialog창을 탈출했을 때 그 dialog에 해당되는 곳에 포커싱되어야 한다.
