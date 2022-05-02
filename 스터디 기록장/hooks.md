# Hooks?

: Hooks 는 리액트 v16.8 에 새로 도입된 기능으로서, 함수형 컴포넌트에서도 상태 관리를 할 수 있는 `useState`, 그리고 렌더링 직후 작업을 설정하는 `useEffect` 등의 기능등을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줍니다.

## 1. useState

: useState 는 가장 기본적인 Hook 으로서, 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다. 만약에 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 요 Hook 을 이용하면 된다는 말!

### 예제코드

```js:Counter.js
import React, { useState } from "react";

const Counter = () => {

  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태
  // h2 부분을 동적으로 변화시키고자 함

  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  )
}
```

useState 를 사용할 땐 코드의 상단에서 import 구문을 통하여 불러오고, 다음과 같이 사용합니다.

```js:Counter.js
const [value, setValue] = useState(0);
```

위 문법은 `배열 비구조화 할당 문법` 입니다.

### 배열 비구조화 할당?

```js:ArrayEx.js
const array = ['dog', 'cat', 'sheep'];
const [first, second] = array;
console.log(first, second); // dog cat
```

이제 다시 useState Hook 을 이해 해보자면, 이 함수의 파라미터에는 상태의 기본값을 넣어줍니다. 우리는 현재 0 을 넣어줬는데, 이는 결국 카운터의 기본값을 0 으로 설정하겠다는 의미! 이 함수가 호출되고 나면 배열을 반환하는데 그 배열의 첫번째 원소는 **상태 값**이고, 두번째 원소는 **상태를 설정하는 함수**입니다. 이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌게 되고 컴포넌트는 정상적으로 리렌더링 됩니다.

> 함수형 컴포넌트에서 상태 관리를 하기 위하여 굳이 클래스 형태로 변환할 필요가 없어서 매우 편리!!!

하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용하면 됩니다.

### 예제코드

```js:Info.js
import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
```

관리할 상태가 여러개인 경우에도 useState 로 편하게 관리할 수 있음!!💛

## 2. useEffect

: useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook 입니다. 클래스형 컴포넌트의 `componentDidMount` 와 `componentDidUpdate` 를 합친 상태로 보아도 무방합니다.

> componentDidMount와 componentDidUpdate를 알아보려다가 클래스형 컴포넌트라 생략함!ㅎㅎ

<img width="1478" alt="스크린샷 2022-05-03 오전 1 41 08" src="https://user-images.githubusercontent.com/68318945/166288937-ea323812-6d20-420c-9462-2a061d88360e.png">

## 2-1. 마운트 될 때만 실행하고 싶을 때

만약 useEffect 에서 설정한 함수의 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다. <br>
기존 코드에서

```js:Info.js
useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });
```

```js:Info.js
useEffect(() => {
  console.log('마운트 될 때만 실행됩니다.');
}, []);
```

로 변경하면 됩니다.

<img width="1479" alt="스크린샷 2022-05-03 오전 1 48 42" src="https://user-images.githubusercontent.com/68318945/166289877-f935448c-9653-4f13-917c-e052714f353a.png">

## 2-2. 특정 값이 업데이트 될 때만 실행하고 싶을 때

useEffect 를 사용할 때 특정 값이 변경될 때만 호출하게 하고 싶은 경우엔,

```js:Info.js
useEffect(() => {
  console.log(name);
}, [name]);
```

배열 안에는 useState 를 통해 관리하고 있는 상태를 넣어줘도 되고, props 로 전달받은 값을 넣어줘도 됩니다.

<img width="1478" alt="스크린샷 2022-05-03 오전 1 53 25" src="https://user-images.githubusercontent.com/68318945/166290594-f07ca66d-71b4-4c29-bb21-a76c3eb0790b.png">

## 2-3. 뒷정리 하기

useEffect 는 기본적으로 렌더링 되고난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라집니다. <br>
만약 컴포넌트가 언마운트 되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect 에서 뒷정리(cleanup) 함수를 반환해주어야 합니다.

```js:Info.js
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  }
});
```

이제 App 컴포넌트에서 Info 컴포넌트의 가시성을 바꿀 수 있게 해봅시다. 이번에도 useState 를 사용하여 상태를 관리해보기!!

```js:App.js
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  )
}
```

컴포넌트가 나타날 때 콘솔에 `effect` 가 보이고 사라질 때 `cleanup` 이 보여지게 됩니다. <br>
<img width="1479" alt="스크린샷 2022-05-03 오전 2 05 04" src="https://user-images.githubusercontent.com/68318945/166292589-c187065a-cb49-49c6-af05-417ba6c6c8e1.png"> <br>

한번 인풋에 이름을 적어보고 콘솔에 어떻게 나오는지 확인해보면, <br>
<img width="1478" alt="스크린샷 2022-05-03 오전 2 05 15" src="https://user-images.githubusercontent.com/68318945/166292665-a49b7bcb-2ba8-4c1d-975d-dec31178d5d1.png"> <br>
렌더링이 될 때마다 뒷정리 함수가 계속 보여지고 있는 것을 확인할 수 있습니다. 그리고 뒷정리 함수가 호출될 때에는 업데이트 되기 직전의 값을 보여주고 있습니다.
<br>
<br>
만약에, 오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두번째 파라미터에 비어있는 배열을 넣으시면 됩니다.

```js:Info.js
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  };
}, []);
```
