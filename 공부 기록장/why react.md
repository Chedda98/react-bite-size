## 리액트
- 자바스크립트의 UI 라이브러리 `컴포넌트 기반!`
- 지금은 Meta라고 불리는 Facebook이 개발한 오픈소스
<br>

> 강의에서 사용할 스택은 `JS - Node.js - React.js`

## 시맨틱한 이름 
1. header
2. nav
3. article
4. footer

이때, 헤더만 바꿔야 하는 상황이 온다면? 
**중복코드 작성 문제가 생김!** <br>
→ Shotgun Surgery (산탄총 수술)이라고 불린다.

### 기존 방식
- `index.html`과 `about.html`이 따로 있는 상태에서 Header 중복 변경 감행 → **매우 비효율적**

### 컴포넌트화 방식 🌟
- 중간에 `module.js` 두고 `index.html`과 `about.html`에 적용
<br>

**✏️ 리액트를 써야하는 3가지 이유🌟**
1. 컴포넌트 기반으로 구성되어 있음!
2. 선언형 프로그래밍!
>> 명령형 프로그래밍은 jQuery와 같이 절차를 하나하나 다 나열해야 하는 반면, 선언형 프로그래밍은 그냥 목적을 바로 말한다 👍🏻
3. DOM(Document Object Model)
>> DOM은 브라우저가 실제로 사용하는 객체로, Virtual DOM을 사용했을 시 매번 렌더링하는 것이 아닌 가상으로 돌리고 실제 반영 땐 Browser DOM으로 Update 한다 🙂