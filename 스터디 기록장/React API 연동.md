# API가 왜 필요할까? 정확하게 말하면, React에서 API가 왜 필요할까?
: React는 Front-end 에서 사용! <br>
데이터를 모두가 사용할 수 있게 저장할 수 없다는 것을 의미하고, 또 그것은 다른 사용자와의 데이터 공유가 이뤄질 수 없음을 의미 
<br>
<br>
따라서 API Server를 구축해 쓰거나, 남이 만든 것을 가져와서 쓰면, 값을 조작할 경우 API Server가 갱신이 되면서, 같은 API Server를 공유하는 유저들 또한 바뀐 값을 사용할 수 있게 됨
```
yarn add axios
```
axios는 REST API에 데이터를 요청할 때, 이를 Promise로 처리할 수 있게 해주는 라이브러리

# Rest API
: HTTP method를 통해 서버와 클라이언트의 통신을 할 경우에 Rest API를 사용해서 상대가 어떤 통신을 요청하는지, 그리고 내가 어떤 통신을 요청해야 하는지 정할 수 있음 (한 마디로, **클라이언트와 서버가 소통하는 방식!**)
- GET : 데이터 조회
- POST : 데이터 등록
- PUT : 데이터 수정
- DELETE : 데이터 제거

```js
axios.get('/users/1');
```
이 경우는 users들 중에 1번째 user에 대한 정보를 불러와달라는 것을 의미함 <br>
물론, 1번째가 아니라 id가 1인 유저가 될 수도 있고...서버의 API 명세서를 잘 읽어보면 무슨 뜻인지 더 잘 알 수 있음 ㅎㅎ!
```js
axios.post('/users', {
  username: 'aaaaa',
  name: 'DAIN',
  password: '123!@#',
  email: 'hidain@email.com',
});
```
이런 식으로 작성했다면, users에 해당 user 객체를 post 해달라는 의미! <br>
즉, 서버가 어떤 규칙을 정해놓으면 클라이언트는 그것에 맞게 REST API를 통신하면 되고, 그것을 도와주는 것이 바로 axios 라이브러리! <br>

# 실습
따끈따끈한 솝커톤 코드 다시 봐볼까? ㅎㅎ 우리 솝커톤 때는
![정리 후 결과](https://user-images.githubusercontent.com/68318945/169848825-4b13e7ae-5cf0-44f4-b415-8cea5a907e89.jpg)
여기서 00명의 히어로 부분을 서버와 통신했어! 데이터 조회라 `GET` 방식을 이용했고, 코드로는
```js
const [userCount, setUserCount] = useState('');

  useEffect(() => {
    async function fetchUserCount() {
      const { data } = await axios.get('https://asia-northeast3-sopkathon-a7a6f.cloudfunctions.net/app/user');
      setUserCount(data.data);
    }
    fetchUserCount();
  }, []);
```
이렇게 구현했었어! 여기서 data 가져오는 부분을 보면, `배포한서버주소/app/user` 를 통해 우리가 app 하단 user 객체들을 조회하는 것을 확인할 수 있지!! <br>
여기서 fetchUserCount() 함수를 `useEffect`로 감싼 이유는! 데이터가 렌더링될 때마다 유저의 값을 새로 가져와야하기 때문이야! <br>
그리고 `setUserCount`를 통해 data 객체 안에 있는 data 인덱스 값을 뽑아오는 것도 확인할 수 있지! <br>
근데 나 왜 갑자기 대화체로 바뀐거지 ... ? 아무튼 ...
