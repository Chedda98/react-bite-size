# React App을 만드는 방법
## 1️⃣ Boiler Plate
![Boiler Plate](https://user-images.githubusercontent.com/68318945/163826824-f9373278-31e5-4694-b6ef-97066a970da9.png)
> Boiler Plate : 이미 세팅 완료된 패키지 (패키지의 패키지)
<br>

## 2️⃣ create-react-app
`npx create-react-app 프로젝트명`
> ❓ npx : npm은 계속 사용할 빵틀이라면 npx는 좀 더 쉽고 편리하게 이용하기 위한 도구! 한마디로, 설치되어 있지 않은 패키지를 딱 한번만 사용하고 싶을 때 사용함 🌟
<br>

## 실행된 react 페이지
- App() 함수 리턴값을 부름
- 웹서버 위 react가 띄워짐 <br>
✏️ 개발자 도구 (Mac) : `option + command + i`
> cf. 만일 node_modules가 없다면? `npm i` 하면 다시 다운받아진다! 이는 package.json에서 해당 모듈의 정보들이 담겨있기 때문!
<br>

### 💻 App.js
: JS와 HTML 섞인 듯한 모양새 → **JSX** <br>
: 모듈처럼 만들어서 다른 파일에서도 끌어씀 → **컴포넌트 방식**
> ✏️ ES module system :  <br>
export defalut `Name`; <br>
import `Name` from 파일경로;

cf. robots.txt : 구글 검색엔진 설정 파일 (수집, 비수집 목록 설정도 이곳에서 가능)
