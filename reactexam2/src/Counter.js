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

export default Counter;
