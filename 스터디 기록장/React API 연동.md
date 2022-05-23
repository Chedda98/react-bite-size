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


