# Google Auth

## 1. Firebase 구성

1. Firebase 서비스의 console 페이지로 이동
2. 프로젝트 추가 : 프로젝트 이름 및 생성
3. 앱을 추가하여 시작하기 (웹)
4. 앱 닉네임 설정
5. 프로젝트 설정 : 프로젝트 ID, 지원 이메일 설정

## 1.1. config : Firebase 구성 코드

1. <span style="color: royalblue">프로젝트 설정 > Firebase SDK snippet > 구성</span>에서 apiKey 및 기타 설정 확인하고, 그 설정을 바탕으로 env 파일 구성

<span style="color: indianred">.env</span> 🔻

```json
REACT_APP_FB_API_KEY=...
REACT_APP_FB_AUTH_DOMAIN=...
REACT_APP_FB_DB_URL=...
REACT_APP_FB_PROJECT_ID=...
REACT_APP_FB_STORAGE_BUCKET=...
REACT_APP_FB_MESSAGE_ID=...
REACT_APP_FB_APP_ID=...
```

_환경 변수는 빌드 과정에서 임베드(embed) 되므로 외부에 공개되면 안되는 보안 코드를 사용해서는 안됩니다!_

<span style="color: indianred">firebase.js</span> 🔻

```js
const {
  REACT_APP_FB_API_KEY,
  REACT_APP_FB_AUTH_DOMAIN,
  REACT_APP_FB_DB_URL,
  REACT_APP_FB_PROJECT_ID,
  REACT_APP_FB_STORAGE_BUCKET,
  REACT_APP_FB_MESSAGE_ID,
  REACT_APP_FB_APP_ID,
} = process.env
```

## 1.2. initialize : 초기화

프로젝트 설정 객체로 앱을 초기화
<span style="color: indianred">firebase.js</span> 🔻

```js
firebase.initialApp(config)
```

## 1.3. 내보내기

1. 인증 객체 생성
   <span style="color: indianred">firebase.js</span> 🔻

```js
export const auth = firebase.auth()
```

2. 데이터베이스 객체 생성
   <span style="color: indianred">firebase.js</span> 🔻

```js
export const firestore = firebase.firestore()
```

3. firebase app 기본 내보내기
   <span style="color: indianred">firebase.js</span> 🔻

```js
export default firebase
```

## 2. Firebase 인증 (Auth)

### 2.1. 인증 방법 설정

1. 빌드 > Authentication > 시작하기
2. sign-in method > `Google` 상태 '사용'으로 설정
3. sign-in method > `이메일/비밀번호` 상태 '사용'으로 설정
   google authentication provider 설정

### 2.2. GoogleAuthProvider 설정

new로 auth 인스턴스를 생성하고, GoogleAuthProvider 메서드를 호출하여 설정한다.
<span style="color: indianred">firebase.js</span> 🔻

```js
const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
```

### 2.3. 언어 설정 (선택)

1. 언어 현지화 (명시적으로 언어 설정)

```js
auth.languageCode = 'ko'
```

1. 기기의 현재 사용 중인 언어로 설정 (기기 설정에 따름)

```js
auth.useDeviceLanguage()
```

### 2.4. 인증 사용자

로그인한 사용자는 인스턴스 `auth` 의 현재 사용자가 된다 → `currentUser`

```js
auth.currentUser
```

### 2.5. 로그인 (인증 상태 관찰)

**① 로그인 함수 내보내기**

- Google의 인증 공급자 로그인(회원가입) 유틸리티
- auth라는 인스턴스가 가진 메서드 중 `signInWithPopup(공급자)` 의 공급자 부분에 위에서 생성한 인스턴스 `googleProvider` 를 넣는다.

<span style="color: indianred">firebase.js</span> 🔻

```js
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
```

**② 로그인 버튼에 로그인 함수 설정**

<span style="color: indianred">Navigation.js</span> 🔻

```js
import { signInWithGoogle } from 'api/firebase'

function Navigation(...) {
  ...
  return (
    <>
    ...
      <GoogleButton onClick={signInWithGoogle}>
    </>
  )
}
```

**③ firebase 인증 상태 관찰 및 변경**

`auth.onAuthStateChanged()` : 사용자가 로그인되면 관찰자에서 사용자에 대한 정보를 가져올 수 있다.

<span style="color: indianred">Navigation.js</span> 🔻

```js
function Navigation(...) {
  // firebase 인증 상태 변경
  React.useEffect(() => {
    // onAuthStateChanged
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const authUser = {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
          createAt: new Date(),
        }
        // 로그인 상태 변경
        onSignIn(currentUser)
      } else {
        // 로그아웃 상태 변경
        onSignOut()
      }
    })
  })
  ...
}
```

onAuthStateChanged 에서 가져온 사용자 정보

<img src="https://user-images.githubusercontent.com/72931773/112931301-dd3e6180-9156-11eb-9002-47fd2e167bb5.png" width="60%">

### onAuthStateChanged : 인증 상태 관찰

`snapshot`

이벤트 연결한 것을 해제 🔻

```js
...
(error) => console.error(error.message)
```

```js
React.useEffect(() => {
  // 인증 상태 관찰 이벤트
  // 이벤츠 해제 함수 참조
  const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
    if (currentUser) {
      const userRef = await createOrGetUserProfile(currentUser)

      userRef.onSnapshot(
        (snapshot) => {
          onSignIn({
            uid: snapshot.id,
            ...snapshot.data(),
          })
        },
        (error) => console.error(error.message)
      )
    } else {
      onSignOut()
    }
  })
  // 클린업
  return () => unsubscribe()
}, [onSignIn, onSignOut])
```

## 로그아웃

**① 로그아웃 함수 내보내기**

<span style="color: indianred">firebase.js</span> 🔻

```js
export const signOut = () => auth.signOut()
```

**② 로그아웃 이벤트 리스너**

서버에서 로그아웃이 완료되면 상태 변경 (`onSignout`)

<span style="color: indianred">Navigation.js</span> 🔻

```js
import { signInWithGoogle, signOut, auth } from 'api/firebase'

// `로그아웃` 이벤트 리스너
const handleSignOut = async (e) => {
  e.preventDefault()
  try {
    // 서버에서 로그아웃 정보가 넘어오면
    await signOut()
    // 로그아웃 액션 디스패치
    onSignOut()
    // URL 홈페이지로 변경
    history.push('/')
  } catch (error) {
    throw new Error('로그아웃 실패')
  }
}
```

## 인증 상태 지속성

```js
auth.setPersistence(firebase.auth.Auth.Persistence.지속형태)
```

- 사용자 인증 상태의 지속 여부를 결정할 수 있다.

<br/>

**지속 형태 종류**

- `firebase.auth.Auth.Persistence.LOCAL` : 브라우저 창이 닫히거나 react에서 활동이 폐기된 경우에도 상태가 유지됨. 이 상태를 삭제하려면 명시적으로 로그아웃 해야한다.
- `firebase.auth.Auth.Persistence.SESSION` : 현재의 섹션이나 탭에서만 상태가 유지되며, 사용자가 인증된 탭이나 창이 닫히면 삭제됨. (웹앱만 해당됨)
- `firebase.auth.Auth.Persistence.NONE` : 상태가 메모리에만 저장되고, 창이나 활동이 새로고침되면 삭제된다.

<br/>

**사용 예시**

- 자동로그인 체크시 : persistence를 local
- 자동로그인 체크 안하면 : persistence를 세션 또는 none

<br/>

**인증 지속성 설정 유틸리티 함수**

```js
export const setAuthPersist = (value) => {
  let mode = ''
  switch (value) {
    default:
    case 'local':
      mode = 'LOCAL'
      break
    case 'session':
      mode = 'SESSION'
      break
    case 'none':
      mode = 'NONE'
  }

  auth.setPersistence(firebase.auth.Auth.Persistence[mode])
}
```
