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
