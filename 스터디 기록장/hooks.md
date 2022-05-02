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
