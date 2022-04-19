**🌟 공식 문서 : https://ko.reactjs.org/docs/components-and-props.html**

### ① 리액트 컴포넌트(Component)란?
- 리액트로 만들어진 앱을 이루는 최소한의 단위!
- 기존의 웹 프레임워크는 MVC 방식으로 분리하여 관리하여 각 요소의 의존성이 높아 재활용이 어렵다는 단점이 있었다. 반면 컴포넌트는 **MVC의 뷰를 독립적으로 구성하여 재사용을 할 수 있고** 이를 통해 새로운 컴포넌트를 쉽게 만들 수 있다.
>> MVC 방식❓ Model-View-Controller 방식
- 컴포넌트는 데이터(Props)를 입력받아 View(state) 상태에 따라 DOM Node를 출력하는 함수!
- 컴포넌트 이름은 항상 `대문자`로 시작하도록 한다! (리액트는 *소문자로 시작하는 컴포넌트를 DOM 태그로 취급*하기 때문)
- UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 코딩한다.
- 개념적으로 컴포넌트는 JavaScript 함수와 유사함! **“props”**라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다.

ex) 컴포넌트 활용 예시 (블로그)
- 글 목록 컴포넌트 1개, 결과 컴포넌트를 1개 생성하여 다음과 같은 화면을 구성할 수 있다. 
![컴포넌트 예시1](https://user-images.githubusercontent.com/68318945/164022509-af1d7fce-2c04-4f92-aa19-3659c10e473c.png)
- 이 컴포넌트를 활용하여 다음과 같은 화면을 구성 시 재활용 가능하다.
![컴포넌트 예시2](https://user-images.githubusercontent.com/68318945/164022527-3df2a9f1-67cb-4f7f-92fe-89cc7caecded.png)
<br>

### ② 컴포넌트의 종류
- 리액트에서 정의하는 컴포넌트 종류는 크게 함수형 컴포넌트, 클래스형 컴포넌트 2가지가 있다.
<br>

②-1. 함수형 컴포넌트(Stateless Functional Component)
```
import React from 'react'; 

function MyComponent(props) { 
  return <div>Hello, {props.name}</div>; 
} 

export default MyComponent; //다른 JS파일에서 불러올 수 있도록 내보내주기
```
→ 작성한 MyComponent 파일을 다른 파일에서 import 할때 MyComponent로 불러올 수 있도록 정의해 주는 부분
- 여기서 import시 js, jsx 등 파일 확장자를 생략해도 자동으로 찾을 수 있다. 이는 "웹팩 코드 검색 확장자(webpack module resolution)" 기능 때문이다. 확장자가 파일 이름에 없는 경우 웹팩의 확장자 옵션(extentions)에 정의된 확장자 목록을 통해 확장자 이름을 포함한 파일이 있는지 확인하여 자동으로 임포트 한다. <br>
✏️ `import 'Header';` 의 경우 `Header.js > Header.jsx 순서로 확인`한다.
<br>

②-2. 클래스형 컴포넌트(Class Component)
```
import React from 'react'; 
class MyComponent extends React.Component { 
  constructor(props) { // 생성함수 
    super(props); 
  } 
  
  componentDidMount() { // 상속받은 생명주기 함수 
  } 
  
  render() { // 상속받은 화면 출력 함수, 클래스형 컴포넌트는 render() 필수
    return <div>Hello, {this.props.name}</div>; 
  } 
} 

export default MyComponent; //다른 JS파일에서 불러올 수 있도록 내보내주기
```
→ 컴포넌트 구성 요소, 리액트 생명주기를 모두 포함하고 있다.
→ 프로퍼티, state, 생명주기 함수가 필요한 구조의 컴포넌트를 만들 때 사용한다.
>> 프로퍼티❓ 속성이란 뜻으로 자바스크립트에서 객체 내부의 속성을 의미

*여기까지 봤을 땐, 한눈에도 함수형 컴포넌트가 사용하기 쉬워 보임 but! 함수형 컴포넌트로 하지 못하는 작업을 처리할 때가 있는데 이때 클래스형 컴포넌트를 활용!*
> 그게 언젠데❓ 예전에 만들어진 리액트 관련 라이브러리는 Hooks 의 지원이 안되는 경우도 있고, react-native 관련 라우터 라이브러리인 react-native-navigation 의 경우에 클래스형 컴포넌트를 어쩔 수 없이 써야 하는 일이 종종 있다고 한다~
<br>

### ③ 간단 실습 - 레이아웃 나누기
**💻 공통 App.js 파일** <br>
<img width="628" alt="공통 App js 파일" src="https://user-images.githubusercontent.com/68318945/164038904-5d5cfae9-3eec-42b9-a570-2e6b21b35f7d.png"> 
<br>

③-1. 함수형 컴포넌트 생성 <br>
<img width="522" alt="함수형 컴포넌트 예제" src="https://user-images.githubusercontent.com/68318945/164039634-ce30d056-4010-48d7-b274-2fe028314b36.png">
<br>

③-2. 클래스형 컴포넌트 생성 <br>
<img width="523" alt="클래스형 컴포넌트 파일 예제" src="https://user-images.githubusercontent.com/68318945/164038928-9fae7056-3f5e-43de-9e8f-43e7bf8963d2.png">
