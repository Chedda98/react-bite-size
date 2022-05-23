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
: HTTP method를 통해 서버와 클라이언트의 통신을 할 경우에 Rest API를 사용해서 상대가 어떤 통신을 요청하는지, 그리고 내가 어떤 통신을 요청해야 하는지 정할 수 있음
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
